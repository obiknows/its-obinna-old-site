import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/storeLayout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const StorePage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Store" />

      <StoreContainer>
        <Link
          to="/store/"
          style={{ width: `100%`, height: `200px`, backgroundColor: `red` }}
        >
          <div />
        </Link>
        <Link
          to="/store/"
          style={{ width: `100%`, height: `200px`, backgroundColor: `black` }}
        />
        <Link
          to="/store/"
          style={{ width: `100%`, height: `200px`, backgroundColor: `green` }}
        />
        <Link
          to="/store/"
          style={{ width: `100%`, height: `200px`, backgroundColor: `gold` }}
        />
        <Link
          to="/store/"
          style={{ width: `100%`, height: `200px`, backgroundColor: `gold` }}
        />
        <Link
          to="/store/"
          style={{ width: `100%`, height: `200px`, backgroundColor: `green` }}
        />
        <Link
          to="/store/"
          style={{ width: `100%`, height: `200px`, backgroundColor: `black` }}
        />
        <Link
          to="/store/"
          style={{ width: `100%`, height: `200px`, backgroundColor: `red` }}
        />
      </StoreContainer>
    </Layout>
  )
}

const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  margin-top: 4rem;
  margin-right: 4rem;
  margin-left: 4rem;
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <StorePage location={props.location} data={data} {...props} />
    )}
  />
)
