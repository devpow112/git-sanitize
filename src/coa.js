import { sync as commandExistsSync } from 'command-exists';
import { spawnSync } from 'child_process';

const executeGit = args => {
  const result = spawnSync('git', args);

  if (result.error) {
    throw new Error(
      `Failed executing 'git ${args.join(' ')}, with error: ${result.error}`
    );
  } else if (result.signal !== null) {
    throw new Error(
      `Failed executing 'git ${args.join(' ')}, with signal: ${result.signal}`
    );
  } else if (result.status !== 0) {
    throw new Error(
      `Failed executing 'git ${args.join(' ')}, with code: ${result.status}`
    );
  }
};

export const execute = () => {
  if (!commandExistsSync('git')) {
    console.error('git is not available');
    process.exit(2);
  }

  const submoduleForEach = ['submodule', 'foreach', '--recursive'];

  try {
    executeGit(['clean', '-xfdf']);
    executeGit(submoduleForEach.concat(['git', 'clean', '-xfdf']));
    executeGit(['reset', '--hard']);
    executeGit(submoduleForEach.concat(['git', 'reset', '--hard']));
    executeGit(['submodule', 'update', '--recursive', '--init']);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
