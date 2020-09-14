import React from "react"
import "../styles/index.scss"
import styles from "../styles/components.module.scss"

const Skills = props => {
  let skillsArray = props.skills.split(", ")
  const skillz = skillsArray.map((skill, i) => {
    return (
      <div className={styles.skill}>
        <span key={skill} className={styles.skillSpan}>
          {skill}
        </span>
      </div>
    )
  })
  return (
    <div className={styles.skillsBox}>
      <h4>{props.header}</h4>
      <div>{skillz}</div>
      <div>{props.icons}</div>
    </div>
  )
}

export default Skills
