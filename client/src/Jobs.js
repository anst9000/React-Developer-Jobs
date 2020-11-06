import React from "react";
import {
  // makeStyles,
  // Paper,
  Typography,
  MobileStepper,
  // List,
  // ListItem,
  // ListItemText,
  // Chip,
  Button,
  // TextField,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

import Job from "./Job";
import JobModal from "./JobModal";

export default function Jobs({ jobs }) {
  // Job Modal
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Pagination
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const numJobs = jobs.length;
  const jobsPerPage = 25;
  const maxSteps = Math.ceil(numJobs / jobsPerPage);
  const jobsOnPage = jobs.slice(
    activeStep * jobsPerPage,
    activeStep * jobsPerPage + jobsPerPage
  );

  return (
    <div className="jobs">
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
      <Typography
        variant="h4"
        component="h1"
        style={{
          fontWeight: "bold",
          letterSpacing: "2px",
          color: "#171D1C",
        }}
      >
        Entry Level Software Jobs
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        style={{
          fontWeight: "bold",
          letterSpacing: "2px",
          color: "#171D1C",
        }}
      >
        Found {numJobs} jobs
      </Typography>
      {jobsOnPage.map((job) => (
        <Job
          job={job}
          key={job.id}
          onClick={() => {
            console.log("clicked");
            handleClickOpen();
            selectJob(job);
          }}
        />
      ))}

      <div>Page</div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {<KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {<KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}
