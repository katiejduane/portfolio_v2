import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Content from "../components/content"

const IndexPage = () => (
  <Layout>
    <Content
      seo="Home"
      title="Hello!"
      // subtitle="A little bit about me..."
      p1="I am a web developer, writer, yoga teacher, and a devoted lover of coffee,
      books, trees, clouds, exploring, and outer space. I see writing code as similar 
      to writing a good poem: it should be clear, efficient, beautiful, and accessible."
      p2="Currently, I work as a Software Developer in Test at Ware2Go out of Atlanta, GA.
      I love coming up with creative and efficient solutions, learning new technologies,
      DRYing up my code, and collaborating with my colleagues. UI and API testing has taught
      me a lot about what a structurally sound and testable application looks like, and I'd
      love to bring this knowledge and experience into a developer role."
      p3="My background is in education and the fine arts, and I taught art in Oregon, Ecuador,
      and New York before realizing I desired a more technical career. In 2019, I completed 
      a four-month coding program at DigitalCrafts in Atlanta. When I'm not writing 
      code, I'm probably busy writing essays, reading, or spending time outside."
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image img="gatsby-astronaut.png" />
    </div>
  </Layout>
)

export default IndexPage
