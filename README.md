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

Non custom project

See the next tutorial for more info: https://dusanstam.com/posts/react-express-monorepo
