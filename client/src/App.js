import React from "react";
import "./App.css";
import Jobs from "./Jobs";

const JOB_API_URL = "/api/jobs";

// const mockJobs = [
//   { id: 1, title: "SWE 1", company: "Google" },
//   { id: 2, title: "SWE 2", company: "Facebook" },
//   { id: 3, title: "SWE 3", company: "Microsoft" },
// ];

async function fetchJobs(updateCallback) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCallback(json);
  console.log({ json });
}

function App() {
  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
