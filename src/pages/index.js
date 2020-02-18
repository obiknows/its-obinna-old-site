import React from "react"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

import flower from "../images/flower.jpg"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const SiteIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

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

        {/* PROJECT to the RIGHT */}
        <Link to={`/work`}>
          <div
            style={{
              marginBottom: `10rem`,
              display: `flex`,
              justifyContent: `flex-end`,
            }}
          >
            <img
              src={flower}
              style={{ width: `40%`, marginRight: 0 }}
              alt=" "
            />
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

        {/* PROJECT to the LEFT */}
        <Link to={`/services`}>
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

        {/* PROJECT to the RIGHT */}
        <Link to={`/services`}>
          <div
            style={{
              marginBottom: `10rem`,
              display: `flex`,
              justifyContent: `flex-end`,
            }}
          >
            <img
              src={flower}
              style={{ width: `40%`, marginRight: 0 }}
              alt=" "
            />
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
          key={posts[1].node.fields.slug}
          count={postCounter}
          node={posts[1].node}
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
      filter: { frontmatter: { type: { eq: null } } }
      limit: 4
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
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
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
    query={indexQuery}
    render={data => (
      <SiteIndex location={props.location} props data={data} {...props} />
    )}
  />
)
