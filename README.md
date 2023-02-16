# Welcome to Art Gallery App 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/TrudyCyns/Art-Gallery-App#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/TrudyCyns/Art-Gallery-App/graphs/commit-activity)
[![Twitter: GNabasirye](https://img.shields.io/twitter/follow/GNabasirye.svg?style=social)](https://twitter.com/GNabasirye)

> The project's goal is to develop an image gallery store for users where users may submit their photographs while labeling them with a title and description, login, register with an email and password, and reset their password, and authenticated users with the correct permissions will be be able to see all of their uploaded memories as well as all experiences for unauthenticated users.

>The project is designed using NodeJS for the backend (API) and ReactJS for the frontend.

### 🏠 [Homepage](https://github.com/TrudyCyns/Art-Gallery-App#readme)

## Table of contents

- [Requirements](#requirements)
  - [Node](#node)
- [Install](#install)
- [Usage](#usage)
- [Additional Information](#additional-information)
  - [Built with](#built-with)
  - [Continued Development](#continued-development)
  - [Resources](#resources)
- [Author](#author)

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      sudo apt install nodejs
      sudo apt install npm

- #### Other Operating Systems

  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    npm install npm -g

---

## Install

```sh
  git clone https://github.com/TrudyCyns/Art-Gallery-App.git
  cd Art-Gallery-App
  npm install
```

To install the ReactJS packages:

```sh
  cd Art-Gallery-App/client
  npm install
```

## Usage

```sh
 npm run start
```

Using a package called `concurrently`, the above command is set to start both the frontend and backend at the same time.

---

## Additional Information

### Built with

- NodeJS (backend)
- ReactJS (frontend)
- React Router DOM (routing)
- Redux toolkit (state management)
- Axios (for requests to backend)
- Bootstrap

### Continued Development

The password reset feature is complete in the API but requires implementation in the frontend. On this process, the UI has been fully designed and what is left is to create a request to the backend.

### Resources

- **create-react-app** : The following link has all the commands that can be used with create-react-app
<https://github.com/facebook/create-react-app>

- **ReactJS** : Refer to <https://reactjs.org/> to understand the concepts of ReactJS

- **React Bootstrap** : Refer to <https://react-bootstrap.github.io/getting-started/introduction/> to understand how to use React Bootstrap

---

## Author

👤 **Gertrude Nabasirye**

- Twitter: [@GNabasirye](https://twitter.com/GNabasirye)
- Github: [@TrudyCyns](https://github.com/TrudyCyns)
- LinkedIn: [@gertrude-nabasirye](https://linkedin.com/in/gertrude-nabasirye)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Gertrude Nabasirye](https://github.com/TrudyCyns).
