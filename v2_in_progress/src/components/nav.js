import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import styles from "../styles/components.module.scss"

const navItems = [{link: '/', title: 'Home'},{link: '/skills/', title: 'Skills'},{link: '/dev-projects/', title: 'Development'},{link: '/creative/', title: 'Creative'},{link: '/contact/', title: 'Contact'}, {link: '/blog/', title: 'Blog'}]
const navBar = navItems.map((item)=> {
  return(
    <li>
        <Link className={styles.navItem} to={item.link}>
          {item.title}
        </Link>
      </li>
  )
})

export default function NavBar() {
  return (
    <ul className={styles.navbar}>
      {navBar}
    </ul>
  )
}
