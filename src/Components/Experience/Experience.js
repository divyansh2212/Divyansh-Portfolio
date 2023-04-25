import React from 'react'
import styles from "./Experience.module.css"
import Timeline from '../Timeline/Timeline'

const Experience = () => {
  return (
    <div>
        <h1 className={styles.heading}>Experience</h1>
        <Timeline/>
    </div>
  )
}

export default Experience