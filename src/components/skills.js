import React from "react"
import "../styles/index.scss"
import styles from "../styles/components.module.scss"

// TO DO: figure out how to deal with this image issue so you can add logos (pngs) to
// programming/design related skills

const Skills = props => {
  let skillsArray = props.skills.split(", ")
  const skillz = skillsArray.map((skill, i) => {
    return (
      <div className={styles.skill}>
        {/* <i icon={skill}></i> */}
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
