# Colab Users (Code Challenge)

## 📝 About

This project has as objective returning a users list on client side built with React from an Node.js API with SQLite database.

## 🚀 Features

- **React** - A library to build user interfaces
- **Redux with Redux Saga** - State management with middleware
- **Node.js** - A server-side JavaScript runtime
- **TypeScript** - A superset of JavaScript.
- **Lint** - ESLint and Prettier with airbnb style guide.

## 💻 Getting started

```bash
  # Clone this repo
  $ git clone https://github.com/joaowicktor/challenge-colab-users.git

  # Access the project directory
  $ cd challenge-colab-users
```

### Running API

```bash
  # Access the API directory
  $ cd api

  # Install dependencies
  $ yarn
```

This project already has a database populated with fake data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), but if you want, you can delete _**db.sqlite**_ file from api folder and run migration again to create and populate database with this command:

```bash
  $ yarn typeorm migration:run
```

Now, just run the api

```bash
  $ yarn dev
```

### Running Client

```bash
  # Access the client directory
  $ cd client

  # Install dependencies
  $ yarn

  # Run
  $ yarn start
```

---

_Desenvolvido por <a href="https://www.linkedin.com/in/joaowicktor/" target="_blank">João Wicktor</a>_