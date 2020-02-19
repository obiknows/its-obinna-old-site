import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const SiteIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  const Projects = posts.filter(
    project => project.node.frontmatter.type === "project"
  )
  const Services = posts.filter(
    service => service.node.frontmatter.type === "service"
  )
  const BlogPosts = posts.filter(
    blogpost => blogpost.node.frontmatter.type === null
  )

  var projectCount = 0
  let ProjectsSectionContent = Projects.slice(0, 2).map(project => {
    projectCount++
    if (projectCount % 2 === 0) {
      return (
        /* PROJECT to the RIGHT */
        <Link to={project.node.fields.slug} style={{ gridArea: "fourth" }}>
          <div>
            <Img
              fluid={project.node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            {/* <Img fixed={project.node.frontmatter.thumbnail.childImageSharp.fixed} /> */}
          </div>
        </Link>
      )
    } else {
      return (
        /* PROJECT to the LEFT */
        <Link to={project.node.fields.slug}>
          <div>
            <Img
              fluid={project.node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            {/* <Img fixed={project.node.frontmatter.thumbnail.childImageSharp.fixed} /> */}
          </div>
        </Link>
      )
    }
  })

  var serviceCount = 0
  let ServicesSectionContent = Services.slice(0, 2).map(service => {
    serviceCount++
    if (serviceCount % 2 === 0) {
      return (
        /* PROJECT to the RIGHT */
        <Link to={service.node.fields.slug} style={{ gridArea: "fourth" }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: `350px`,
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
          >
            <Img
              fluid={service.node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <h5
              style={{
                marginTop: `1rem`,
                marginBottom: `0rem`,
                color: "white",
                textDecoration: "none",
              }}
            >
              {service.node.frontmatter.title}
            </h5>
          </div>
        </Link>
      )
    } else {
      return (
        /* PROJECT to the LEFT */
        <Link to={service.node.fields.slug}>
          <div
            style={{
              textAlign: "center",
              maxWidth: `350px`,
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
          >
            <Img
              fluid={service.node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <h5
              style={{
                marginTop: `1rem`,
                marginBottom: `0rem`,
                color: "white",
                textDecoration: "none",
              }}
            >
              {service.node.frontmatter.title}
            </h5>
          </div>
        </Link>
      )
    }
  })

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Home"
        keywords={[
          `blog`,
          `beats`,
          `store`,
          `wealth`,
          `health`,
          `code`,
          `tech`,
          `advice`,
          `info`,
        ]}
      />

      {/* HERO W/ TEXT */}
      <header className="page-head">
        <h2 className="page-head-title">
          {/* HEADER TYPE WRITER */}
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={typewriter => {
              typewriter
                .typeString(`My name's Obinna.`)
                .pauseFor(250)
                .deleteAll()

                .typeString(`I'm here to build with my people.`)
                .pauseFor(500)
                .deleteAll()

                .typeString(`I build apps.`)
                .pauseFor(250)
                .deleteAll()

                .typeString(`I make beats.`)
                .pauseFor(250)
                .deleteAll()

                .typeString(`I study health.`)
                .pauseFor(250)
                .deleteAll()

                .typeString(`I practice wealth.`)
                .pauseFor(250)
                .deleteAll()

                .typeString(`I'm on a mission to help us win.`)
                .pauseFor(500)
                .deleteAll()

                .start()
            }}
          />
        </h2>
      </header>

      {/* CHECK MY PROJECTS (TOP 2 + CTA[`/work`]) */}
      <ProjectsSection>
        {/* 2 HORIZONTAL LINES */}
        <SectionBreak />
        <SectionBreak />

        {/* SECTION HEADER */}
        <SectionHeaderText>CHECK MY PROJECTS</SectionHeaderText>
        <SectionContentContainer>
          {ProjectsSectionContent}
        </SectionContentContainer>

        {/* CTA ACTION BUTTON */}
        <Link to={`/work`} style={{ textDecoration: `none` }}>
          <div
            style={{
              backgroundColor: `black`,
              color: `white`,
              width: `max-content`,
              marginLeft: `auto`,
              marginRight: `auto`,
              padding: `2rem`,
            }}
          >
            <h6
              style={{
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                fontFamily: `Roboto Mono`,
              }}
            >
              See More Work
            </h6>
          </div>
        </Link>
      </ProjectsSection>

      {/* CHECK MY SERVICES (TOP 2 + CTA[`/services`]] */}
      <ServicesSection>
        {/* 2 HORIZONTAL LINES INV */}
        <SectionBreakInverted />
        <SectionBreakInverted />

        {/* SECTION HEADER INV */}
        <SectionHeaderTextInverted>CHECK MY SERVICES</SectionHeaderTextInverted>
        <SectionContentContainer>
          {ServicesSectionContent}
        </SectionContentContainer>

        {/* CTA ACTION BUTTON */}
        <Link to={`/services`} style={{ textDecoration: `none` }}>
          <div
            style={{
              backgroundColor: `#219653`,
              color: `white`,
              width: `max-content`,
              marginLeft: `auto`,
              marginRight: `auto`,
              padding: `2rem`,
            }}
          >
            <h6
              style={{
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                fontFamily: `Roboto Mono`,
              }}
            >
              See More Services
            </h6>
          </div>
        </Link>
      </ServicesSection>

      {/* FEATURED POST [`/blog/{ctg}/{blog_post_name}`] */}
      <FeaturedPostSection>
        {/* SECTION HEADER */}
        <SectionHeaderText style={{ textAlign: `center` }}>
          FEATURED POST
        </SectionHeaderText>

        <PostCard
          key={BlogPosts[0].node.fields.slug}
          count={postCounter}
          node={BlogPosts[0].node}
          postClass={`post`}
        />
      </FeaturedPostSection>

      {/* FEATURED BEAT [`/blog/beats/{blog_post_name}`] */}
      {/* <FeaturedBeat></FeaturedBeat> */}

      {/* FEATURED ITEM [`/store/{store_item_name}`] */}
      {/* <FeaturedItem></FeaturedItem> */}

      {/* CODE CHART (chart from WakaTime) */}
      {/* <CodeChart></CodeChart> */}

      {/* POST FEED (3 most recent posts) */}
      {/* <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div> */}
    </Layout>
  )
}

/*
  STYLED COMPONENTS
*/

const SectionBreak = styled.div`
  width: 55%;
  height: 0.77rem;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.88);
`
const SectionBreakInverted = styled.div`
  margin-left: auto;
  width: 55%;
  height: 0.77rem;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.88);
`
const ProjectsSection = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`
const ServicesSection = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`
const FeaturedPostSection = styled.div`
  padding-left: 20rem;
  padding-right: 20rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
`
const SectionHeaderText = styled.h2`
  margin-top: 1rem;
  margin-bottom: 7rem;
  font-family: "Roboto Mono";
`
const SectionHeaderTextInverted = styled.h2`
  text-align: right;
  margin-top: 1rem;
  margin-bottom: 7rem;
  font-family: "Roboto Mono";
`

const SectionContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 4rem;
  grid-template-areas:
    "first second"
    "third fourth";
  margin-bottom: 4rem;
  margin-top: 4rem;
  margin-right: 4rem;
  margin-left: 4rem;

  @media (max-width: 1050px) {
    grid-column-gap: 3rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  @media (max-width: 770px) {
    grid-column-gap: 2rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  @media (max-width: 600px) {
    grid-column-gap: 1rem;
    margin-right: 0rem;
    margin-left: 0rem;
  }
`

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            draft
            type
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 250) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_noBase64
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
    query={indexQuery}
    render={data => (
      <SiteIndex location={props.location} props data={data} {...props} />
    )}
  />
)
