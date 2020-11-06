const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/jobs", async (req, res) => {
  const jobs = await getAsync("github");
  const nrOfJobs = JSON.parse(jobs).length;
  console.log(nrOfJobs);
  const returnString = "There are " + nrOfJobs + " jobs for you.";

  return res.send(jobs);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
