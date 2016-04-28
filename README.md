# react-router-express
[React Router] example using [Express]
It uses [Browserify] to convert require modules for the browser

### Dependencies
This requires [npm] for running make sure to install the same.

### How to Run
Clone or download as zip and extract. And, execute the following commands in root folder and navigate to <http://localhost:3000/> in browser
```sh
$ npm install
$ browserify index.js -o public/bundle.js -t [ babelify --presets [ es2015 react ] ]
$ node app.js
```

### Version - 1.0.0
### License - GPL

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[React Router]: <https://github.com/reactjs/react-router>
[Express]: <http://expressjs.com/>
[Browserify]: <http://browserify.org/>
[npm]: <https://www.npmjs.com/>
