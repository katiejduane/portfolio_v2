import React from "react"
import "../styles/index.scss"
import styles from "../styles/components.module.scss"

// TO DO: figure out how to deal with this image issue so you can add logos (pngs) to
// programming/design related skills

const SoftSkills = props => {
  return (
    <div className={styles.skillsBox}>
      <h4>{props.header}</h4>
      <p>{props.p}</p>
    </div>
  )
}

export default SoftSkills
