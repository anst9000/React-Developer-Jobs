let fetch = require("node-fetch");
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const baseURL = "https://jobs.github.com/positions.json";

// Fetch all pages
async function fetchGitHub() {
  let resultCount = 1;
  let onPage = 0;
  const jobMap = new Map();
  let allJobs = [];

  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();

    jobs.forEach((job) => {
      jobMap.set(job.id, job);
    });
    // console.log({ jobs });
    // allJobs.push(...jobs);

    resultCount = jobs.length;
    console.log("got", resultCount, "jobs");
    onPage++;
  }

  // Converting from map to array
  console.log("total jobs b4 array", jobMap.size, "jobs");
  allJobs = Array.from(jobMap.values());
  console.log("total jobs a8 array", allJobs.size, "jobs");

  // Filter algorithm
  const jrJobs = allJobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();
    let isJunior = true;

    // Algo logic
    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr.") ||
      jobTitle.includes("architect")
    ) {
      isJunior = false;
    }

    return isJunior;
  });

  console.log("filtered down to", jrJobs.length, "jobs");

  // Storing to redis
  const success = await setAsync("github", JSON.stringify(jrJobs));

  console.log({ success });
}

fetchGitHub();

module.exports = fetchGitHub;
