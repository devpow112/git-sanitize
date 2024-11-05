# Git Sanitize

[![License][License Badge]](LICENSE)
[![Version][Version Badge]][Version Package]
[![Release][Release Badge]][Release Workflow]
[![Node Version][Node Version Badge]](package.json#L61)

Git custom command that will do a full "sanitize" of a branch. This will reset
the branch and all submodules to be back to the branches `HEAD` state by
effectively running the following.

```console
git clean -xfdf
git submodule foreach --recursive git clean -xfdf
git reset --hard
git submodule foreach --recursive git reset --hard
git submodule update --init --recursive
```

## Installation

```console
npm i -g git-sanitize
```

## Usage

```console
git sanitize
```

## Development

Development can be done on any machine that can install **Node.js**.

### Install Dependencies

Install dependencies via `npm`.

```console
npm i
```

### Linting

Execute linters via `npm`.

```console
# git, javascript, markdown and package.json
npm run lint

# git only
npm run lint:git

# javascript only
npm run lint:js

# markdown only
npm run lint:md

# package.json only
npm run lint:pkg
```

### Fixing

Execute automatic fixers via `npm`.

```console
# javascript, markdown and package.json
npm run fix

# javascript only
npm run fix:js

# markdown only
npm run fix:md

# package.json only
npm run fix:pkg
```

### Building

Run a build via `npm`.

```console
npm run build
```

<!-- links -->
[License Badge]: https://img.shields.io/github/license/devpow112/git-sanitize?label=License
[Version Badge]: https://img.shields.io/npm/v/git-sanitize?label=Version
[Version Package]: https://www.npmjs.com/git-sanitize
[Node Version Badge]: https://img.shields.io/node/v/git-sanitize
[Release Badge]: https://github.com/devpow112/git-sanitize/actions/workflows/release.yml/badge.svg?branch=main
[Release Workflow]: https://github.com/devpow112/git-sanitize/actions/workflows/release.yml?query=branch%3Amain
