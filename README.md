# React eslint config

There is an eslint config which extends airbnb, ts and other useful configurations.

## Usage 

- npm

```
npm install @wallwhite/react-eslint-config-ts --save-dev
```

- yarn 

```
yarn add @wallwhite/react-eslint-config-ts --dev
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