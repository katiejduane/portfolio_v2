import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "../styles/components.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.headerBar}>
    <div className={styles.headerContent}>
      <h1 className={styles.headerTitle}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
