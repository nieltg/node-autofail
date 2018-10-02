# autofail

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
