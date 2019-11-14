import React from "react"
import { Link } from "gatsby"

// コンポーネントからexporされているものを持ってくる
import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>This is work ペーーーージ</h1>
    <Link to="/">Topへ戻る</Link>
  </Layout>
)

export default WorkPage
