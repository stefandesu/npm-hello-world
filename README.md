# npm-hello-world
Just a repository to test stuff with

## Install

```bash
npm i @stefandesu/hello-world
```

## Usage

```js
const hw = require("@stefandesu/hello-world")
console.log(hw.hello) // prints "world"
```

## Test

```bash
git clone https://github.com/stefandesu/npm-hello-world.git
cd npm-hello-world
npm i
npm test
```

## Maintainers
- @stefandesu

## Publish
Please work on the `dev` branch during development (or better yet, develop in a feature branch and merge into `dev` when ready).

When a new release is ready (i.e. the features are finished, merged into `dev`, and all tests succeed), run the included release script (replace "patch" with "minor" or "major" if necessary):

```bash
npm run release:patch
```

This will:
- Switch to `dev`
- Make sure `dev` is up-to-date
- Run `npm version patch` (or "minor"/"major")
- Push changes to `dev`
- Switch to `main`
- Merge changes from `dev`
- Push `main` with tags
- Switch back to `dev`

## Contribute
PRs accepted.

## License
[The Unlicense](https://unlicense.org)
