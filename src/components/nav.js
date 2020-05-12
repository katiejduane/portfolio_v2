import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import styles from "./nav.module.scss"

const NavBar = () => (
  // throw this in a ul/li sitch eventually
  <ul className={styles.navbar}>
    <li>
      <Link className={styles.navItem} to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className={styles.navItem} to="/projects/">
        Projects
      </Link>
    </li>
    <li>
      <Link className={styles.navItem} to="/skills/">
        Skills
      </Link>
    </li>
    <li>
      <Link className={styles.navItem} to="/contact/">
        Contact
      </Link>
    </li>
    <li>
      <Link className={styles.navItem} to="/other-loves/">
        Other Loves
      </Link>
    </li>
  </ul>
)

// NavBar.propTypes = {
//     siteTitle: PropTypes.string,
// }

// NavBar.defaultProps = {
//     siteTitle: ``,
// }

export default NavBar
