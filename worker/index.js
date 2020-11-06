let CronJob = require("cron").CronJob;
const fetchGitHub = require("./tasks/fetch-github");

var job = new CronJob(
  "* * * * *",
  fetchGitHub,
  null,
  true,
  "America/Los_Angeles"
);
job.start();
