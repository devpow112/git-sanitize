import { sync as commandExistsSync } from 'command-exists';
import { executeGit } from './execute-git';

if (commandExistsSync('git')) {
  const submoduleForEach = ['submodule', 'foreach', '--recursive'];

  try {
    executeGit(['clean', '-xfdf']);
    executeGit(submoduleForEach.concat(['git', 'clean', '-xfdf']));
    executeGit(['reset', '--hard']);
    executeGit(submoduleForEach.concat(['git', 'reset', '-hard']));
    executeGit(['submodule', 'update', '--recursive', '--init']);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
} else {
  console.error('git is not available');
  process.exit(2);
}
