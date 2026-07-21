# Node, Express and MongoDB

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Overview

This is an easy, basic and raw example of **HOW to** implement an API with Node, Express and MongoDB/Atlas (with Mongoose ODM).

## Requirements

- Node 12+
- NPM
- MongoDB
- Mongoose ODM
- Optional: MongoDB account

## Install dependencies

<!-- 
https://github.com/typicode/husky/issues/866
To avoid issues with `husky`, first enable `git hooks` (and add our hook):

```shell
npx husky install

npx husky add .husky/pre-commit
```

Then, install the dependencies as usual: 
-->

```
npm install
```

## Environment variables

Create your env file from the sample. The app loads
`src/config/<ENVIRONMENT>.env`, so create `dev.env` for `npm run dev` and
`prod.env` for `npm start`:

```shell
cp src/config/.env.example src/config/dev.env
```

Fill in your MongoDB Atlas connection (`DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_NAME`).

> Installs use `legacy-peer-deps` (set in `.npmrc`) because the pinned 2021
> dev tooling predates npm 7's stricter peer-dependency resolution.

## Running the server

### Development

```
npm run dev
```

### Production

```
npm run build

npm start
```

## API endpoints

### GET /api/users

- Returns an object with the key data containing an array of objects with `40 records`.
- Supports query string:
  - ?limit=integer
  - ?offset=integer

#### Request:

```
curl http://127.0.0.1:3333/api/users
```

#### Sample response:

```json
{
  "data": [
    {
      "_id": "60da6b74fc13ae7069000d4b",
      "firstname": "Dedra",
      "lastname": "Demangel",
      "age": 96,
      "gender": "Agender",
      "username": "ddemangel3",
      "company": "Skidoo",
      "email": "ddemangel3@networkadvertising.org",
      "phone": "759-142-2883",
      "address": "4 Fisk Drive"
    },
    {
      "_id": "60da6b74fc13ae7069000d48",
      "firstname": "Martynne",
      "lastname": "Pimmocke",
      "age": 79,
      "gender": "Female",
      "username": "mpimmocke0",
      "company": "Edgeify",
      "email": "mpimmocke0@amazonaws.com",
      "phone": "354-508-5487",
      "address": "20633 Stone Corner Trail"
    }
  ]
}
```

#### Query string

##### GET /api/users?limit=1

- Returns `n` record(s) where `n` is the value (type: Number) of the `limit` key.

###### Request:

```
curl http://127.0.0.1:3333/api/users?limit=1
```

###### Response:

```json
{
  "data": [
    {
      "_id": "60da6b74fc13ae7069000d4b",
      "firstname": "Dedra",
      "lastname": "Demangel",
      "age": 96,
      "gender": "Agender",
      "username": "ddemangel3",
      "company": "Skidoo",
      "email": "ddemangel3@networkadvertising.org",
      "phone": "759-142-2883",
      "address": "4 Fisk Drive"
    }
  ]
}
```

A non-numeric value falls back to the default (`limit` 40, `offset` 0).
Example: `users?limit=%27Hello%27` returns the first 40 users.

##### GET /api/users?offset=10

- Returns from `n` (PRIMARY KEY) where `n` is the value (type: Number) of the `offset` key.

###### Request:

```
curl http://127.0.0.1:3333/api/users?offset=10
```

###### Response:

```json
{
  "data": [
    {
      "_id": "60da6b74fc13ae7069000d55",
      "firstname": "Cindi",
      "lastname": "Harnell",
      "age": 57,
      "gender": "Bigender",
      "username": "charnelld",
      "company": "Skyble",
      "email": "charnelld@networkadvertising.org",
      "phone": "176-961-8815",
      "address": "09953 Susan Alley"
    },
    {
      "_id": "60da6b74fc13ae7069000d57",
      "firstname": "Olva",
      "lastname": "Hoodless",
      "age": 61,
      "gender": "Female",
      "username": "ohoodlessf",
      "company": "Jaloo",
      "email": "ohoodlessf@illinois.edu",
      "phone": "886-598-0586",
      "address": "8 Chinook Pass"
    }
  ]
}
```

### GET /latency

- Returns an object with a delay of 1 second (default)
- Supports query string:
  - ?delay=integer (milliseconds, min 1000, max 4000)

#### Request:

```
curl http://127.0.0.1:3333/latency
```

#### Response:

```json
{
  "data": "Thanks for waiting 1 second"
}
```

#### Query string

##### GET /latency?delay=2000

- Increases latency (delay) to `n` milliseconds where, _min:1000_ and _max:4000_. Default value: 1000ms.

Wrong type for `n` value will produce a default delay of 1000ms.

###### Request:

```
curl http://127.0.0.1:3333/latency?delay=2000
```

###### Response:

```json
{
  "data": "Thanks for waiting 2 seconds"
}
```

### GET everything else

- Any other endpoint will retrieve an object

#### Request:

```
curl http://127.0.0.1:3333/
```

#### Response:

```json
{
  "message": "Node.js, Express, and MongoDB API!"
}
```

---

## Notes:

If you need it, see [Migrating from mLab to MongoDB Atlas](./migrating-mlab-to-mongo-atlas.md).