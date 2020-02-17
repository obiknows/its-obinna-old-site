import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
// import styled from "styled-components"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/workLayout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const WorkPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges

  let FeaturedProjectsGrid = projects.map(project => {
    return (
      <>
        <div
          style={{
            marginBottom: `3rem`,
            display: `flex`,
            flexDirection: "column",
            // flex: `flex-start`,
            // marginLeft: `auto`,
            // marginRight: `auto`,
            textAlign: "center",
          }}
        >
          <Link to={project.node.fields.slug} style={{ flex: 1 }}>
            <div
              style={{
                height: `25rem`,
                width: `25rem`,
                marginLeft: `auto`,
                marginRight: `auto`,
                marginTop: `auto`,
                marginBottom: `auto`,
              }}
            >
              {/* <Img fixed={project.node.frontmatter.thumbnail.childImageSharp.fixed}/> */}
              <Img
                fluid={project.node.frontmatter.thumbnail.childImageSharp.fluid}
              />
            </div>
            {/* <img src={flower} style={{ maxWidth: `70%` }} alt=" " /> */}
          </Link>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                color: `white`,
                fontFamily: `Roboto Mono`,
                marginTop: `3rem`,
                marginBottom: `1rem`,
              }}
            >
              {project.node.frontmatter.title}
            </h3>
            <p
              style={{
                marginTop: `0rem`,
                marginBottom: `1rem`,
                textTransform: `uppercase`,
                letterSpacing: `2px`,
                lineHeight: `initial`,
              }}
            >
              {project.node.frontmatter.subtitle}
            </p>
          </div>
        </div>
      </>
    )
  })

  return (
    <Layout title={siteTitle}>
      <SEO title="Work" />

      {/* SECTION HEADER */}
      <SectionHeaderTextWORK>FEATURED WORK</SectionHeaderTextWORK>
      {/* 2 HORIZONTAL LINES */}
      <SectionBreakWORK />
      <SectionBreakWORK style={{ marginBottom: `5rem` }} />

      <FeaturedProjectsGridContainer>
        {FeaturedProjectsGrid}
      </FeaturedProjectsGridContainer>
    </Layout>
  )
}

const FeaturedProjectsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  margin-top: 4rem;
  margin-right: 4rem;
  margin-left: 4rem;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SectionHeaderTextWORK = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 3rem;
  font-family: "Roboto Mono";
`
const SectionBreakWORK = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 35%;
  height: 0.77rem;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.88);
`

const projectsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "project" }, draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            draft
            subtitle
            description
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 400, height: 400) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={projectsQuery}
    render={data => (
      <WorkPage location={props.location} data={data} {...props} />
    )}
  />
)
