import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Timeline.module.css";

const Timeline = ({ data }) => {
  return (
    <div>
      <VerticalTimeline>
        {data.map((work) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${work.color}`, color: "#fff" }}
              contentArrowStyle={{
                borderRight: `7px solid  ${work.color}`,
              }}
              date={work.tenure}
              iconStyle={{ background: "rgb(190, 56, 26)", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: "xx-large", color: "black" }}
              >
                {work.company}
              </h3>
              <h4
                style={{ fontSize: "large", fontStyle: "italic" }}
                className="vertical-timeline-element-subtitle"
              >
                {work.title}
              </h4>
              <ul style={{ margin: "4% 2%" }}>
                {work.responsibilities.map((points) => {
                  return <li className={styles.list}>{points}</li>;
                })}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
