# Git Sanitize

Git custom command that will do a full "sanitize" of a branch. This will reset
the branch and all submodules to be back to the branches `HEAD` state by
basically running the following.

```bash
git clean -xfdf
git submodule foreach --recursive git clean -xfdf
git reset --hard
git submodule foreach --recursive git reset --hard
git submodule update --init --recursive
```

## Install

```bash
npm i -g git-sanitize
```

## Usage

```bash
git sanitize
```
