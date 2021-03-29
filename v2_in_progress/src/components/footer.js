import React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> by Katie J. Duane
    </footer>
  )
}

export default Footer
