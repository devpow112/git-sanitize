# Git Sanitize

[![License][License Badge]](LICENSE)
[![Version][Version Badge]][Version Package]
[![CI][CI Badge]][CI Workflow]
[![Release][Release Badge]][Release Workflow]
[![Vulnerabilities][Vulnerabilities Badge]][Vulnerabilities Report]
[![Node Version][Node Version Badge]](package.json#L38)

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

## Installation

```bash
npm i -g git-sanitize
```

## Usage

```bash
git sanitize
```

## Development

Development can be done on any machine that can install **Node.js**.

### Install Dependencies

Install dependencies via `npm`.

```bash
npm i
```

### Linting

Execute linters via `npm`.

```bash
# git, javascript and markdown
npm run lint

# git only
npm run lint:git

# javascript only
npm run lint:js

# markdown only
npm run lint:md
```

### Formatting

Execute formatters via `npm`.

```bash
# javascript and markdown
npm run format

# javascript only
npm run format:js

# markdown only
npm run format:md
```

### Building

Run a build via `npm`.

```bash
npm run build
```

<!-- links -->
[License Badge]: https://img.shields.io/github/license/devpow112/git-sanitize?label=License
[Version Badge]: https://img.shields.io/npm/v/git-sanitize?label=Version
[Version Package]: https://www.npmjs.com/git-sanitize
[Node Version Badge]: https://img.shields.io/node/v/git-sanitize
[CI Badge]: https://github.com/devpow112/git-sanitize/actions/workflows/ci.yml/badge.svg?branch=main
[CI Workflow]: https://github.com/devpow112/git-sanitize/actions/workflows/ci.yml?query=branch%3Amain
[Release Badge]: https://github.com/devpow112/git-sanitize/actions/workflows/release.yml/badge.svg?branch=main
[Release Workflow]: https://github.com/devpow112/git-sanitize/actions/workflows/release.yml?query=branch%3Amain
[Vulnerabilities Badge]: https://img.shields.io/snyk/vulnerabilities/github/devpow112/git-sanitize?label=Vulnerabilities
[Vulnerabilities Report]: https://snyk.io/test/github/devpow112/git-sanitize
