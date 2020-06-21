import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import styles from "../styles/components.module.scss"

export default function NavBar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link className={styles.navItem} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={styles.navItem} to="/development/">
          Development
        </Link>
      </li>
      <li>
        <Link className={styles.navItem} to="/writing/">
          Writing
        </Link>
      </li>
      <li>
        <Link className={styles.navItem} to="/yoga/">
          Yoga
        </Link>
      </li>
      <li>
        <Link className={styles.navItem} to="/blog/">
          Blog
        </Link>
      </li>
      <li>
        <Link className={styles.navItem} to="/contact/">
          Contact
        </Link>
      </li>
    </ul>
  )
}
