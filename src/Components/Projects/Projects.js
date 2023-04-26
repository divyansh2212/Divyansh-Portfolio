import React from "react";
import styles from "./Projects.module.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card.js";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "0 20px",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={styles.heading}>Projects</h1>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
