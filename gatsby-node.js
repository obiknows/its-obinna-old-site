const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const projectPage = path.resolve(`./src/templates/project-page.js`)
  const servicePage = path.resolve(`./src/templates/service-page.js`)
  const storeItem = path.resolve(`./src/templates/store-item.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagPage = path.resolve(`./src/templates/tag-page.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                type
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const items = result.data.allMarkdownRemark.edges
    const tagSet = new Set()

    items.forEach((item, index) => {
      const previous = index === items.length - 1 ? null : items[index + 1].node
      const next = index === 0 ? null : items[index - 1].node

      // Get tags for tags pages.
      if (item.node.frontmatter.tags && !item.node.frontmatter.type) {
        item.node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag)
        })
      }

      if (item.node.frontmatter.type == "service") {
        console.log("created the service page:", item.node.frontmatter.title)

        createPage({
          path: item.node.fields.slug,
          component: servicePage,
          context: {
            slug: item.node.fields.slug,
            previous,
            next,
          },
        })

        console.log("Created a service page")
      } else if (item.node.frontmatter.type == "project") {
        // create a work post
        console.log("created the work page:", item.node.frontmatter.title)

        createPage({
          path: item.node.fields.slug,
          component: projectPage,
          context: {
            slug: item.node.fields.slug,
            previous,
            next,
          },
        })

        console.log("Created a work page")
      } else if (item.node.frontmatter.type == "product") {
        // create a store post
        console.log("created the product:", item.node.frontmatter.title)

        createPage({
          path: item.node.fields.slug,
          component: storeItem,
          context: {
            slug: item.node.fields.slug,
            previous,
            next,
          },
        })

        console.log("Created a store page")
      } else {
        // create a blog post
        createPage({
          path: item.node.fields.slug,
          component: blogPost,
          context: {
            slug: item.node.fields.slug,
            previous,
            next,
          },
        })
      }
    })

    // Create tags pages.
    tagSet.forEach(tag => {
      createPage({
        path: `/blog/tags/${_.kebabCase(tag)}/`,
        component: tagPage,
        context: {
          tag,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // if its a product, create a store page
    // if not, create a blog page

    if (node.frontmatter.type == "service") {
      const value = `/service` + createFilePath({ node, getNode })

      console.log("service slug value:", value)

      createNodeField({
        name: `slug`,
        node,
        value,
      })
    } else if (node.frontmatter.type == "project") {
      const value = `/work` + createFilePath({ node, getNode })

      console.log("work slug value:", value)

      createNodeField({
        name: `slug`,
        node,
        value,
      })
    } else if (node.frontmatter.type == "product") {
      const value = `/store` + createFilePath({ node, getNode })

      console.log("store slug value:", value)

      createNodeField({
        name: `slug`,
        node,
        value,
      })
    } else {
      const value = `/blog` + createFilePath({ node, getNode })

      console.log("blog slug value:", value)

      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }
}
