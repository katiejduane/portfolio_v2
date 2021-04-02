import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import styles from "../styles/components.module.scss"
import "../styles/index.scss"

// should i use PROPS or graphql/markdown for project data? or a combo? handling the tech
// icons (if i go that route) would be way easier with just html/props probably, but idk

const Project = props => {

  const projectArray = props.map((project) => {
    
  })
  return (
    <div className="projectContainer">
      {/* // this should not be hard coded but mapped out as an array and simply render array here
      below just provides basic scaffolding */}
      <h2>{props.projectName}</h2>
      {/* // need to handle with gatsby image here, somehow */}
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

export default Project
