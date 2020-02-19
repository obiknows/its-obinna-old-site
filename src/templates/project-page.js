import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/workLayout"
import SEO from "../components/seo"

class ProjectPageTemplate extends React.Component {
  render() {
    const item = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`${item.frontmatter.title}`}
          description={item.frontmatter.description || item.excerpt}
        />
        <ProjectItemContainer
          style={{ marginTop: `5rem`, marginBottom: `10rem` }}
        >
          {/* Project Photo + Words + Gallery */}
          {/* Project Thumbnail */}
          <div style={{ textAlign: "center", marginBottom: `5rem` }}>
            <Img
              backgroundColor={false}
              fluid={item.frontmatter.thumbnail.childImageSharp.fluid}
              style={{
                maxWidth: `300px`,
                marginLeft: `auto`,
                marginRight: `auto`,
              }}
            />
          </div>
          {/* Project Info + Gallery */}
          <div style={{ textAlign: "center" }}>
            {/* Title + Subtitle */}
            <div
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                paddingLeft: `10vw`,
                paddingRight: `10vw`,
              }}
            >
              <div>
                <h5
                  style={{
                    fontSize: 36,
                    marginTop: `1rem`,
                    marginBottom: `0rem`,
                    textTransform: `uppercase`,
                  }}
                >
                  {item.frontmatter.title}
                </h5>
                <p
                  style={{
                    fontSize: 22,
                    marginTop: `0rem`,
                    marginBottom: `1rem`,
                    textTransform: `uppercase`,
                    letterSpacing: 2,
                    lineHeight: `initial`,
                  }}
                >
                  {item.frontmatter.subtitle}
                </p>
              </div>
              {/* Description */}
              <div
                style={{
                  marginTop: `1rem`,
                  fontSize: 22,
                  color: `rgba(255,255,255,0.66)`,
                }}
              >
                "{item.frontmatter.description}"
              </div>
              {/* Project Link */}
              <div
                style={{
                  marginTop: `1rem`,
                  fontSize: 16,
                  color: `rgba(255,255,255,0.66)`,
                }}
              >
                <a href={item.frontmatter.project_link}>
                  {item.frontmatter.project_link}
                </a>
              </div>
            </div>

            {/* Item Description */}
            {/* TODO: fix the white background on markdown images */}
            <div style={{ marginTop: `5rem`, fontSize: 18 }}>
              <div dangerouslySetInnerHTML={{ __html: item.html }} />
            </div>
          </div>
        </ProjectItemContainer>

        {/*  */}
      </Layout>
    )
  }
}

// STYLED COMPONENTS
const ProjectItemContainer = styled.div`
  // display: grid;
  // grid-template-columns: repeat(1, 1fr);
  // grid-template-rows: auto;
  // grid-column-gap: 4rem;
  // grid-row-gap: 4rem;
  // margin-top: 4rem;
  // margin-right: 4rem;
  // margin-left: 4rem;

  // @media (max-width: 750px) {
  //   grid-template-columns: repeat(1, 1fr);
  // }
`

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        subtitle
        project_link
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
