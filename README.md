# eslint-plugin-lab

Linting rules for [lab](https://github.com/hapijs/lab) testing framework

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-lab`:

```
$ npm install eslint-plugin-lab --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lab` globally.

## Usage

Add `lab` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lab"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lab/no-only-experiments": "warn"
    }
}
```

If you project follows the hapi style guide then your eslint file would look something like this:
```json
{
  "extends": "eslint-config-hapi",
  "plugins": [
      "lab"
  ],
  "rules": {
    "lab/no-only-experiments": "warn"
  }
}
```

## Supported Rules

* [`no-only-experiments`](docs/rules/no-only-experiments.md) - Enforces that there are no `experiment` or `describe` calls marked as [`only()`](https://github.com/hapijs/lab#usage)



![A Rankida Project](http://www.rankida.com/assets/logo/logo_small.png)
