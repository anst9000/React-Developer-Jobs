import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    alignItems: "center",
  },
  topicsWindow: {
    width: "30%",
    height: "250px",
    borderRight: "1px solid grey",
  },
  chatWindow: {
    width: "70%",
    height: "250px",
    padding: "20px",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "85%",
  },
  chip: {
    background: "pink",
    marginBottom: "3px",
    marginRight: "3px",
    fontWeight: "bold",
  },
}));

const createTimeString = (time) => {
  let part = time.split(" ").slice(0, 3);
  let year = time.split(" ").slice(-1);
  let timeString = part[0] + " " + part[2] + " " + part[1] + " " + year;
  // let stringDate = part[2] + " " + part[1] + " " + year;
  // let theDate = DateTime.fromFormat(stringDate, "dd LLL yyyy");
  return timeString;
};

export default function Job({ job, onClick }) {
  const classes = useStyles();
  let timeString = createTimeString(job.created_at);

  return (
    <Paper onClick={onClick} className="job">
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h6">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>

      <div>
        <Typography>{timeString}</Typography>
      </div>
    </Paper>
  );
}
