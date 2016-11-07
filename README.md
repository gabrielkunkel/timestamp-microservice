# Node Timestamp Micro-Service

Coded from scratch (No boilerplate or generators), in partial fulfillment of [Free Code Camp](http://www.freecodecamp.com)'s 
Backend Certification, using...

- [X] Test-Driven Development per [Uncle Bob's Three
Laws of TDD](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd).

- [X] Babel, Express, Mocha, Chai, and Moment libraries.

- [X] [Chai-Http](https://github.com/chaijs/chai-http) to test routes.

- [X] [Heroku](http://heroku.com) for deployment.

- [x] JsDoc comments where appropriate.

## User Stories


- [x] I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

- [x] If it does, it returns both the Unix timestamp and the natural language form of that date.

- [x] If it does not contain a date or Unix timestamp, it returns null for those properties.


## How to Run

First, install the dependencies.

```
yarn install
```

or

```
npm install
```

Second, build the project, just to make sure you have the latest version.
```
npm run build
```

Third, run 

```
npm start
```


...And, finally, go visit [http://localhost:8850](http://localhost:8850)
