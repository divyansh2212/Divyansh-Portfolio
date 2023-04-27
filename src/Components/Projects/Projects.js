import React from "react";
import styles from "./Projects.module.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card.js";
import { data } from "./data.js";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "0 20px",
    width: "100vw",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div id="projects">
      <h1 className={styles.heading}>Projects</h1>
      <Grid
        container
        spacing={6}
        className={classes.gridContainer}
        justifyContent="center"
      >
        {data.map((project) => {
          return (
            <Grid item xs={2} sm={6} md={4}>
              <Card project={project} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Projects;
