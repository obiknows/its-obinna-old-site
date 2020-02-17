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

    console.log(item)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`${item.frontmatter.title}`}
          description={item.frontmatter.description || item.excerpt}
        />
        <ProjectItemContainer style={{ marginBottom: `10rem` }}>
          {/* Product Photo + Gallery */}
          <div>
            {/* <p>product photo + gallery</p> */}
            <div style={{ textAlign: "center" }}>
              <Img
                fluid={item.frontmatter.thumbnail.childImageSharp.fluid}
                style={{
                  maxWidth: `350px`,
                  marginLeft: `auto`,
                  marginRight: `auto`,
                }}
              />
            </div>
            {/* Product Info + Sizing Info + Add to Cart + Buy Now Button */}
            <div>
              <div style={{}}>
                {/* Title + Subtitle */}
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
                {/* Description */}
                <div
                  style={{
                    marginTop: `1rem`,
                    fontSize: 18,
                    color: `rgba(255,255,255,0.66)`,
                  }}
                >
                  "{item.frontmatter.description}"
                </div>
                {/* Item Description */}
                <div style={{ marginTop: `1rem` }}>
                  <div dangerouslySetInnerHTML={{ __html: item.html }} />
                </div>
              </div>
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
  display: grid;
  grid-template-columns: repeat(1, 1fr);
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
        price
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
