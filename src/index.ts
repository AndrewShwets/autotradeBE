// Alias for absolute imports
// tslint:disable-next-line:no-var-requires
require("module-alias/register");

import dotenv from "dotenv";
import express from "express";

// initialize configuration
dotenv.config();

const app = express();

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.json({ express: "Hello world", time: new Date() });
});

// start the Express server
app.listen(process.env.SERVER_PORT, () => {
  // console.log( `server started at http://localhost:${ port }` );
});
