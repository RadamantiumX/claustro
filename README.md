# Data Party

This is a data prompter, container and deploy. Using Turborepo, Vite and Node, all working in community with tRCP framework to load an *ecosystem* optimized.


## Project Dev execution

We most adding on file **turbo.json** the next commands:

```json
{
  "$schema": "https://turborepo.com/schema.json",
  "tasks": {
     "dev":{
        "cache": false
     }
  }
}
```

If run *npx run turbo dev* on the console, the develop executions is enable on both projects (frontend/backend), but we can simplify this with adding the next *script* on the main *package.json*:

```json
 "scripts": {
    "dev": "turbo dev"
  }
```

It's mandatory include the *"packageManager": "pnpm@9.15.1"* on that file.

## Dependencies

The *node_modules* only exists on root folder, but the dependencies can be installed on the current project. We must use the follow command:

```bash
pnpm i <<dependency-name>> --workspace factory
```

The **factory** folder is only for this example.

Non custom project

See the next tutorial for more info: https://dusanstam.com/posts/react-express-monorepo


## PACKAGE INSTALLATION MANAGER

USe the follow command to install any dependency on the WORKFLOW:

```bash
pnpm run ws-pkg
```

## ENV VARIABLES SETTING

The ENV variables is unify, to work on all OS, with the library *cross-env* for example:

```json
"scripts":{
   "start": "cross-env NODE_ENV=production node dist/src/index.js"
}

```
