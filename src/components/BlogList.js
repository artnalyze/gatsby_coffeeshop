import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogPost from './BlogPost'

export default function BlogList() {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "MMMM D, YYYY")
                        }
                        excerpt
                    }
                }
            }
        }
    `);
    return (
        <div>
            {data.allMarkdownRemark.edges.map(edges => (
                <BlogPost
                    key={edges.node.id}
                    title={edges.node.frontmatter.title}
                    date={edges.node.frontmatter.date}
                    excerpt={edges.node.excerpt}
                ></BlogPost>   
            ))}
        </div>
    )
}