const path = require("path")
const { createFilePart } = require("gatsby-source-filesystem")

exports.onCreateNode = function({ node, getNode, actions }) {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode })
        createNodeField({
            node,
            name: "slug",
            value: slug,
        })
    }
}

exports.createPages = async function({ graphql, actions }) {
    const { createPage } = actions
    const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
}

/*
{
    allMarkdownRemark {
        edges {
            node {
                fields {
                    slug
                }
            }
        }
    }
}
*/