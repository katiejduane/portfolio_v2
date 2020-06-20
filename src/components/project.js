import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import styles from "../styles/project.module.scss"
import "../styles/index.scss"

// should i use PROPS or graphql/markdown for project data? or a combo? handling the tech
// icons (if i go that route) would be way easier with just html/props probably, but idk

const Content = props => {
  return (
    <div className="projectContainer">
      <h2>{props.projectName}</h2>
      <div>{props.img}</div>
      <p>{props.description}</p>
      <p>Built with: {props.tech}</p>
      {/* ^^ icons would be nice here but NOT a must have initially */}
      {props.demoLink} !== null ? (
      <div>
        <a href={props.demoLink}>
          <button>Demo</button>
        </a>
        <a href={props.github}>
          <button>GitHub</button>
        </a>
      </div>
      ) : (
      <div>
        <a href={props.github}>
          <button>GitHub</button>
        </a>
      </div>
      )
    </div>
  )
}

export default Content
