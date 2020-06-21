import React from "react"

import Layout from "../components/layout"
import Content from "../components/content"

// TO DO: Add list component for edu/training in writing as well as published works...

export default function WritingPage() {
  return (
    <Layout>
      <Content
        seo="Writing"
        title="Writing"
        p1="My writing often explores the connections between the personal and the scientific. I am especially
      fascinated by time, impermanance, biology, physics, and the natural world. Please find links to 
      published works below. Additional pieces forthcoming."
      />
      <h4>Published Works</h4>
      <ul>
        <li>
          <a href="https://www.themanifeststation.net/2018/06/04/m45/">
            M45, essay
          </a>
        </li>
      </ul>
      {/* <a href="">Jasper, poem</a> need to get this file in place, this could be weird */}
      {/* see: https://www.gatsbyjs.org/docs/importing-assets-into-files/ */}
    </Layout>
  )
}
