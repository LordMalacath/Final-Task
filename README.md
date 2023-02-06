# `TeamCamp`
## Single page full stack app

## Features

- SignUp, SignIn
- Create your unique company, get list of all your companies, edit or delete them.
- Authorization provided by JwT Token for 24h, so after that period u will be auto signedOut.

## Tech ctack

Front part:

- [React.js](https://uk.reactjs.org)
- [React Router Dom](https://reactrouter.com/en/main)
- [React Hook Form](https://react-hook-form.com)
- [React Redux](https://react-redux.js.org)
- [Redux Toolkit](https://react-redux.js.org)
- [Universal Cookies](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie#readme)

Back part:

- [Nest.js](https://nestjs.com)
- [Passport JWT](http://www.passportjs.org/packages/passport-jwt/)
- [PostgreSQL](https://www.postgresql.org)
- [Type ORM](https://typeorm.io)
- [TypeScript](https://www.typescriptlang.org)


## Run Locally

Clone the project

```bash
  git clone https://github.com/LordMalacath/4Tech-market
```

Go to the project directory:
> Front
 ```bash
  cd final-task-app
```
> Back
 ```bash
  cd rest-api
```

Install dependencies

```bash
  npm install
```

Start the app

```bash
  npm run start
```

Start the server

```bash
  npm run start:dev
```


For production environments...

```sh
NODE_ENV=production node app
```


## Environment Variables

To run this project, you will need to add the following environment variables to your **.env** file on server side

`DB_HOST` = ' '

`DB_PORT` =

`DB_USERNAME` = ' '

`DB_PASSWORD` = ' '

`DB_NAME` = ' '

or as shown at **.env.local** .
