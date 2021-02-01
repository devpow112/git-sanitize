import { spawnSync } from 'child_process';

export const executeGit = args => {
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
