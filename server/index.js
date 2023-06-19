const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const schema = require("./schema/schema");
const colors = require("colors");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Server is running on ${port}`));
