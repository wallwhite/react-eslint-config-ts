# React eslint config

This is an eslint config which extends airbnb, ts and other useful configurations.

Use the config and make your projects better and readable.

This config included next rules: 
- airbnb
- eslint (recommended)
- eslint typescript (recommended)
- react (recommended)
- react hooks (recommended)
- jsx a11y (recommended)
- prettier (recommended)
- import rules (recommended)


## Install 

- npm:

```
npm install @wallwhite/eslint-config-react-ts --save-dev
```

- yarn:

```
yarn add @wallwhite/eslint-config-react-ts --dev
```

## Usage 

Add to your `.eslintrc`:

```
{
    "extends": [
        "@wallwhite/eslint-config-react-ts"
    ]
}
```

## VS code auto-fix 

There is the config for vs-code to automatically fix issues related with eslint on saving.

```
{
   // ...
   "editor.formatOnSave": false,
   "javascript.format.enable": true,
   "prettier.eslintIntegration": true,
   "eslint.alwaysShowStatus": true,
   "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
   },
   "files.autoSaveDelay": 99,
   // ...
}

```