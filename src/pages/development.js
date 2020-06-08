import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Web Dev Projects</h1>
    <p>Below shall exist an array of projects in web dev</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
