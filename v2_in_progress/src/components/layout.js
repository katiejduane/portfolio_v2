/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import NavBar from "./nav"
import Footer from "./footer"

import styles from "../styles/layout.module.scss"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <NavBar />
      {/* <div className={styles.innerWrapper}> */}
      <main className={styles.content}>{children}</main>
      {/* <div className={styles.surprise}>
          surprise image; shows only on sufficiently wide screens...
        </div> */}
      {/* </div> */}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
