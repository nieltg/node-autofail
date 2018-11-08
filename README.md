# autofail

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/autofail/latest.svg)](https://www.npmjs.com/package/autofail)

Run specified command and exit gracefully.

```
$ autofail echo Hi
Hi
$ echo $?
1
```

## Use Case

You can disable commiting a file using `lint-staged`:

```js
{
  // ...
  "lint-staged": {
    // ...
    "package-lock.json": [
      "autofail cowsay Please use yarn to add/remove dependencies"
    ]
  }
}
```
