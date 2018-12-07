const express = require("express");
const graphqlHTTP = require("express-graphql");
const Schema = require("./schema/schema");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const app = new express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("app is running on port 4000");
});
