# api-nodejs

This repository contains the files and configuration needed to deploy a sample NodeJS Restful API by using Express and MongoDB among other frameworks.
We are not covering any kind of business logic. We just only use this repository to gain practice in the aforementioned technologies.

## Repository Configuration

> We will use only ECS5 not ECS6 capabilities to match the examples taken from the courses. Further, we will migrate the entire code to EC6.

### Initialize NodeJS

To initialize NodeJS in the current repository run the following command

```bash
npm init -y
```

This command will create the file `package.json` with the standard configuration.

### Initialize commitlint and commitizen

To initialize commitlint and commitizen in the current repository we should:

1. \_**\__Commitlint_\_\_** configuration: [Commitlint page](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)

2. \_**\__Commitizen_\_\_** configuration (follow the locally installation steps): [Commitizen Github](https://github.com/commitizen/cz-cli) or [Official Page](http://commitizen.github.io/cz-cli/)

These tools will enforce a correct commit messages during development.

### Install nodemon

Nodemon will automatically restart the node application when file changes in the directory are detected.

Install it using the following command:

```bash
npm install --save-dev nodemon
```

### Install Semantic Release

This dependency will publish out generated artifacts into github relase page.
To install semantic release we must follow these steps

1. Installation: [Install Page](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/installation.md)

   ```bash
       npm install --save-dev semantic-release
   ```

   Then in the CI step run:

   ```bash
       npx semantic-release
   ```

2. Configuration: [Config Page](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration)

   Create a file called `release.config.js` like the one provided in the current repository.

### Install Jest

This depemdency will allow us to enable Unit Tests for our application. Follow the [Getting Started Guide](https://jestjs.io/docs/getting-started) to enable Jest in the project.
To install Jest:

```bash
    npm install --save-dev jest
```

Once installed, run the following command to init Jest:

```bash
    jest --init
```

Where we choose the following options:
![Jest Configuration Options](/docs/assets/jest-configuration.jpg "Jest Config")

Since we choose `babel` as a provider to instrument code for coverage, we must add the configuration described here: [Additional Babel config for Jest](https://jestjs.io/docs/getting-started#using-babel)

### ESLint

Following we will describe the config needed to install and configure ESLint in the repository by using the [ESLint Getting Started Guide](https://eslint.org/docs/user-guide/getting-started)

Install `eslint`

```bash
    npm install eslint --save-dev
```

Create the configuration file

```bash
    npm init @eslint/config
```

And use the follwing options just to start coding: ![ESLint Config Options](/docs/assets/eslint-configuration.jpg "ESLint Configuration")

### Prettier JavaScript

To use `prettier` we follow the [Prettier Install Guide](https://prettier.io/docs/en/install.html)

Install `prettier` locally:

```bash
    npm install --save-dev --save-exact prettier
```

Create an empty config file to let editors and other tools know you are using Prettier:

```bash
    echo {}> .prettierrc.json
```

Following the [Prettier Ignore Code Guide](https://prettier.io/docs/en/ignore.html) to add contents into this file.

## Application Configuration

| Framework | Install                   | Description                                                      |
| :-------- | :------------------------ | :--------------------------------------------------------------- |
| dotenv    | `npm install -S dotenv`   | [NPM Page](https://www.npmjs.com/package/dotenv)                 |
| express   | `npm install -S express`  | [Official Page](http://expressjs.com/en/starter/installing.html) |
| mongoose  | `npm install -S mongoose` | [NPM Page](https://www.npmjs.com/package/mongoose)               |
| cors      | `npm install -S cors`     | [NPM Page](https://www.npmjs.com/package/cors)                   |
