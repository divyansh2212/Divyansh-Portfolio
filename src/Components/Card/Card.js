import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./Card.module.css";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    backgroundColor: "rgba(224, 255, 255, 0.8)",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    },
  },
  bullet: {
    display: "inline-block",
    transform: "scale(0.8)",
    fontSize: "x-large",
    color: "black"
  },
  title: {
    fontSize: 14,
    margin: "0 1%",
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = ({ project }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2" color="primary">
          {project.name}
        </Typography>

        <Typography variant="body2" component="p">
          {project.tech}
          <br />
        </Typography>

        <br />

        <img src={project.image} className={styles.img} />

        <ul variant="body2" className={classes.bullet}>
          {project.points.map((point) => {
            return <li>{point}</li>;
          })}
        </ul>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          size="large"
          href={project.live}
          target="_self"
          color="secondary"
        >
          Live Link
        </Button>
        <Button
          size="large"
          href={project.github}
          color="primary"
          target="_blank"
        >
          GitHub Link
        </Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
