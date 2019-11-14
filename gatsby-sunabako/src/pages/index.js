import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>こんにちは世界</h1>
    {data.allWorksYaml.edges.map(edge => {
      const work = edge.node
      return <div>
        {work.title} - {work.category} - {work.year}
      </div>
    })}
    <Link to="/about/">Go to about page</Link>
  </Layout>
)

export const query = graphql`
  query {
    allWorksYaml {
      edges {
        node {
          title
          category
          year
        }
      }
    }
  }
`
export default IndexPage
