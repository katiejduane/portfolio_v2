import React from "react"

import Layout from "../components/layout"
import Content from "../components/content"

export default function WritingPage() {
  return (
    <Layout>
      <Content
        seo="Writing"
        title="Writing"
        p1="For as long as I've been alive, I've been a writer. I use to name and number my journals.
    My personal favorite was a joural with a mare and foal on the cover, I gave both of them names,
    and depending on my mood, I'd writer to one or the other. At this point, however, there are hundreds,
    and I've lost track."
        p2="I minored in writing in college and I've taken a smattering of writing classes and workshops
    at literary centers and continuing ed programs. I'm currently pursuing an MFA in Creative Writing
    Nonfiction from Pacific Lutheran University's Ranier Writing Workshop."
        p3="My writing often explores the connections between the personal and the scientific. I am especially
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
