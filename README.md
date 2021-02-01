# Git Sanitize

[![License][License Badge]](LICENSE)
[![Version][Version Badge]][Version Package]
[![Build][CI Badge]][CI Workflow]
[![Vulnerabilities][Vulnerabilities Badge]][Vulnerabilities Report]
[![Node Version][Node Version Badge]](package.json#L35)

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

### Building

Install dependencies via `npm`.

```bash
npm i
```

Run a build via `npm`:

```bash
npm run build
```

### Testing

Execute tests via `npm`.

```bash
npm test
```

This will run lint and unit tests. You will also be presented a basic coverage
report after test execution.

### Formatting

Execute formatter via `npm`.

```bash
npm run format
```

<!-- links -->
[License Badge]: https://img.shields.io/github/license/devpow112/git-sanitize
[Version Badge]: https://img.shields.io/npm/v/git-sanitize
[Version Package]: https://www.npmjs.com/git-sanitize
[Node Version Badge]: https://img.shields.io/node/v/git-sanitize
[CI Badge]: https://github.com/devpow112/git-sanitize/workflows/build/badge.svg?branch=main
[CI Workflow]: https://github.com/devpow112/git-sanitize/actions?query=workflow%3Abuild+branch%3Amain
[Vulnerabilities Badge]: https://snyk.io/test/github/devpow112/git-sanitize/badge.svg
[Vulnerabilities Report]: https://snyk.io/test/github/devpow112/git-sanitize
