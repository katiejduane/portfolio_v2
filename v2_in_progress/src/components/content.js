import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import "../styles/index.scss"
import styles from "../styles/layout.module.scss"

const Content = props => {
  return (
    <div className={styles.inner}>
      <SEO title={props.seo} />
      <div className={styles.pageHeader}>
        <h1 className={styles.contentTitle}>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
      <div className={styles.imgContainer}>
        {/* here you need to figure out how to use gatsby image! */}
        <img className={styles.mainImg} src={props.image} alt={props.alt} />
      </div>
      <p>{props.p1}</p>
      <p>{props.p2}</p>
      <p>{props.p3}</p>
    </div>
  )
}

export default Content
