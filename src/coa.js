import { ResetMode, simpleGit } from 'simple-git';
import { isString } from 'lodash';
import { promisify } from 'util';
import { unlink as unlinkCallback } from 'fs';

const options = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 1
};

const unlink = promisify(unlinkCallback);

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
    await git.clean('fdfx');
  } catch {
    // handles cases on windows where path can be too long to clean
    const files = await getCompleteFileList(git);

    for (const file of files) {
      await unlink(file);
    }
  } finally {
    await git.clean('fdfx');
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
    await git.submoduleUpdate(['--recursive', '--init']);
  }

  console.log('Sanitized.');
};
