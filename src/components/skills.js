import React from "react"
import "../styles/index.scss"
import styles from "../styles/skills.module.scss"

const Skills = props => {
  let skillsArray = props.skills.split(",")
  const skillz = skillsArray.map((skill, i) => {
    return (
      <div>
        {/* <i icon={skill}></i> */}
        <span key={i} className={styles.skillSpan}>
          {skill}
        </span>
      </div>
    )
  })
  return (
    <div className="s">
      <h4>{props.header}</h4>
      <div>{skillz}</div>
      <div>{props.icons}</div>
    </div>
  )
}

export default Skills
