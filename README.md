# Git Sanitize

[![License][License Badge]](LICENSE)
[![CI][CI Badge]][CI Workflow]
[![Release][Release Badge]][Release Workflow]
[![Vulnerabilities][Vulnerabilities Badge]][Vulnerabilities Report]
[![Node Version][Node Version Badge]](package.json#L41)
[![Version][Version Badge]][Version Package]

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
[License Badge]: https://img.shields.io/github/license/devpow112/git-sanitize?label=License
[Version Badge]: https://img.shields.io/npm/v/git-sanitize
[Version Package]: https://www.npmjs.com/git-sanitize
[Node Version Badge]: https://img.shields.io/node/v/git-sanitize
[CI Badge]: https://github.com/devpow112/git-sanitize/actions/workflows/ci.yml/badge.svg?branch=main
[CI Workflow]: https://github.com/devpow112/git-sanitize/actions/workflows/ci.yml?query=branch%3Amain
[Release Badge]: https://github.com/devpow112/git-sanitize/actions/workflows/release.yml/badge.svg?branch=main
[Release Workflow]: https://github.com/devpow112/git-sanitize/actions/workflows/release.yml?query=branch%3Amain
[Vulnerabilities Badge]: https://img.shields.io/snyk/vulnerabilities/github/devpow112/git-sanitize?label=Vulnerabilities
[Vulnerabilities Report]: https://snyk.io/test/github/devpow112/git-sanitize
