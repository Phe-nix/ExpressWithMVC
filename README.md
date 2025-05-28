# ExpressWithMVC

## Setup instructions

``` bash
# install Dependency
$ npm install
```

## How to run and test the API
``` bash
# run server with at localhost:3000/api
$ npm run dev

# Testing API

# Craete New User
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Thavith","email":"test@mail.com","password":"123456"}'

# Login
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@mail.com","password":"123456"}'

# List all users (no passwords)
curl http://localhost:3000/api/users

# Get User By ID
curl http://localhost:3000/api/users/1
``` 

