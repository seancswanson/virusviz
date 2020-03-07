// require("babel-polyfill");
// require('babel-core').transform('code', {
//  presets: ['es2015-node5'],
//  plugins: ["transform-es2015-modules-commonjs"],
// });

// Why does this import statement fail?
// import { f } from 'util';

// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();
sassMiddleware = require("node-sass-middleware");

app.use(
  sassMiddleware({
    src: __dirname + "/public/scss",
    dest: "/tmp"
    //debug: true,
    //outputStyle: 'compressed',
  })
);

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(express.static("/tmp"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/dreams", function(request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function(request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Fancy arrow syntax works fine...
var g = x => 2 * x;
// I should be able to use the function f in util.js but it doesn't work

// Simple in-memory store for now
var dreams = ["Find and count some sheep", "test " + g(10), "Wash the dishes"];

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
