import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there!</h1>
    <h2>About...</h2>
    <p>
      Katie is a web developer, writer, teacher, and a devoted lover of coffee,
      yoga, trees, clouds, books, exploring, and outer space.
    </p>
    <p>
      As you can see, there is nothing here yet. Katie is busy building this
      site in Gatsby using JavaScript, SCSS, & HTML and it'll be ready by
      summer! Please visit again soon :)
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
