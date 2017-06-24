# express_api_boilerplate
An opinionated boilerplate for creating an express api with authentication.

## Getting Started

Install dependencies

`$ yarn install`

### Setting up a database

This boilerplate uses PostgreSQL for the database. You must create a test and development databases. In your terminal:

`$ psql`

Once logged in to the postgres interactive terminal:

`CREATE DATABASE express_boilerplate_development;`

`CREATE DATABASE express_boilerplate_test;`

Feel free to change the database name to anything, as long as you update the `knexfile.js` in the root of the project:

```
 test: {
    connection: 'postgres://localhost/express_boilerplate_test',
    ...
  },
  development: {
    connection: 'postgres://localhost/express_boilerplate_development',
    ...
  },
```
### Running Migrations

To run the latest migrations (default environment is development):

`$ yarn latest`

To run in test or production:

`$ NODE_ENV=test yarn latest`

`$ NODE_ENV=production yarn latest`

### Server

To start the server:

`$ yarn start`

That's it. You're running an API with User endpoints and authentication.

## Testing

Uses Mocha, Chai, and ChaiHTTP

`$ yarn test`

Place tests in test folder

## Utilities

**verifyToken(token)** = provide token as argument. Place before route you want protected.
```
router.use(verifyToken);

router.post('/', function(req, res, next) {
    ...
  }
);
```

**allowedParams(whitelist)** = provide array as argument of whitelisted params. Pass function as argument in router.
```
const whitelist = [name, description]
router.post('/', allowedParams(whitelist), function(req, res, next) {
  ...
});
```

**requiredParams(params)** = provide array as argument of required params. Pass function as argument in router.
```
const params = [name, description]
router.post('/', requiredParams(params), function(req, res, next) {
  ...
});
```

**confirmPassword** = check password and confirm_password params equality. Pass as argument in router.

```
const params = [name, description]
router.post('/', confirmPassword, function(req, res, next) {
  ...
});
```

An example of all util functions. allowedParams, requiredParams, confirmPassword are passed together in an array as the second argument.

```
const whitelist = ['username', 'password', 'password_confirmation', 'email'];

router.use(verifyToken);

router.post('/', [
    allowedParams(whitelist),
    requiredParams(['username','password','password_confirmation','email']),
    confirmPassword,
  ], function(req, res, next) {
    ...
  }
);
```


## Yarn Scripts

`yarn start` - starts server

`yarn test` - starts test suite. default environment test.

Prefix script with NODE_ENV= to set environment for following.

`yarn latest` - runs the latest migrations using knex.

`yarn rollback` - rollback migrations

`yarn seed` - run seeds