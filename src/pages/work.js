import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
// import styled from "styled-components"
// import Img from "gatsby-image"

import flower from "../images/flower.jpg"

import Layout from "../components/workLayout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const WorkPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Work" />

      {/* PROJECT to the RIGHT */}
      <Link to={`/work`}>
        <div
          style={{
            marginBottom: `10rem`,
            display: `flex`,
            justifyContent: `flex-end`,
          }}
        >
          <img src={flower} style={{ width: `40%`, marginRight: 0 }} alt=" " />
          <h3
            style={{
              position: `absolute`,
              left: `40%`,
              color: `white`,
              fontFamily: `Roboto Mono`,
            }}
          >
            My lit first project
          </h3>
        </div>
      </Link>

      {/* PROJECT to the LEFT */}
      <Link to={`/work`}>
        <div
          style={{
            marginBottom: `10rem`,
            display: `flex`,
            flex: `flex-start`,
          }}
        >
          <img src={flower} style={{ width: `40%` }} alt=" " />
          <h3
            style={{
              position: `absolute`,
              right: `40%`,
              color: `white`,
              fontFamily: `Roboto Mono`,
            }}
          >
            My lit first project
          </h3>
        </div>
      </Link>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <WorkPage location={props.location} data={data} {...props} />
    )}
  />
)
