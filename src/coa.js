import simpleGit, { ResetMode } from 'simple-git';
import isString from 'lodash.isstring';
import { unlink } from 'fs/promises';

const options = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 1
};

const getCompleteFileList = async git => {
  const status = await git.status(['--ignored']);

  return [
    ...status.files,
    ...(status.ignored ? status.ignored : [])
  ];
};

const shouldClean = async git => {
  return (await getCompleteFileList(git)).length !== 0;
};

const forceClean = async git => {
  try {
    await git.clean('xdf');
  } catch (_) {
    // handles cases on windows where path can be too long to clean
    const files = await getCompleteFileList(git);

    for (const file of files) {
      await unlink(file);
    }
  } finally {
    await git.clean('xdf');
  }
};

const hasSubmodules = async git => {
  const result = await git.subModule('status');

  return isString(result) && result.trim() !== '';
};

const submoduleForEach = async (git, args) => {
  await git.subModule(['foreach', '--recursive', 'git', ...args]);
};

export const execute = async () => {
  const git = simpleGit(options);

  await git.checkIsRepo();

  if (!(await shouldClean(git))) {
    console.log('Already sanitized.');

    return;
  }

  console.log('Cleaning...');

  await forceClean(git);

  const runSubmoduleCommands = await hasSubmodules(git);

  if (runSubmoduleCommands) {
    console.log('Cleaning submodules...');

    await submoduleForEach(git, ['clean', '-xfdf']);
  }

  console.log('Resetting...');

  await git.reset(ResetMode.HARD);

  if (runSubmoduleCommands) {
    console.log('Resetting submodules...');

    await submoduleForEach(git, ['reset', '--hard']);
    await git.subModuleUpdate(['--recursive', '--init']);
  }

  console.log('Sanitized.');
};
