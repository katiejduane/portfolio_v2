import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import styles from "../styles/layout.module.scss"
import SEO from "../components/seo"
import "../styles/index.scss"

const Content = props => {
  return (
    <div className="c">
      <SEO title={props.seo} />
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.p1}</p>
      <p>{props.p2}</p>
      <p>{props.p3}</p>
      <div>{props.extras}</div>
      <div>{props.img}</div>
    </div>
  )
}

export default Content
