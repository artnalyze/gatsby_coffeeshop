<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->

Test

```sh
$ npm install netlify-cms-app@2.12.15 gatsby-plugin-netlify-cms@4.3.5

$ npm install gatsby-source-filesystem@2.3.14

$ npm install gatsby-transformer-remark@2.8.19
```

### GraphQL example 

```
{
  allFile(filter: { name: { eq: "2020-03-06-welcome-to-the-coffee-blog" } })
    edges {
      node {
        extension
        dir
        modifiedTime
      }
    }
  }
}
```

### Parsing the Markdown data

```
{
  allMarkdownRemark {
    edges {
      node {
        html
      }
    }
  }
}
```

## Querying and displaying the data

### Creating a blog post component

> src/components/BlogPost.js

```js
import React from 'react';
import styles from './BlogPost.module.css';

export default function BlogPost({ title, date, excerpt }) {
    return (
        <article className={styles.blog}>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{excerpt}</p>
        </article>
    );
};
```

> src/components/BlogPost.module.css

```css
.blog {
padding: 1rem;
}
.blog h2 {
margin: 0;
}
.blog h3 {
margin: 0;
font-style: italic;
}
```

### Creating a blog list component and querying for data

```js
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
```

### Using the BlogList component

> src/pages/index.js

```js
import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import BlogList from "../components/BlogList"

import Layout from "../components/Layout"

import styles from "./index.module.css"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <div id={styles.hero}>
        <h1>{data.site.siteMetadata.title}</h1>
      </div>
      <BlogList/>
    </Layout>
  )
}
```

### Fixing the sort order

```js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogPost from './BlogPost';
export default function BlogList() {
const data = useStaticQuery(graphql`
{
  allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC })
    {
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
  {data.allMarkdownRemark.edges.map(edge => (
  <BlogPost
  key={edge.node.id}
  title={edge.node.frontmatter.title}
  date={edge.node.frontmatter.date}
  excerpt={edge.node.excerpt}/>
  ))}
</div>);
}
```

## Dynamic Page Creation

### Gatsby Node APIs

onCreateNode
createPages

### Adding the slug to the blog post data

> gatsby-node.js

```js
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
```

### Dynamically creating the blog post pages

> templates/blog.js

```js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "./blog.module.css"

export default function BlogTemplate({ data }) {
  return (
    <Layout>
      <div className={styles.blog}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
```

> templates/blog.module.css

```css
.blog {
    padding: 1rem;
}

.blog h1 {
    margin: 0;
}
```

### Creating the pages

> gatsby-node.js

```js
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

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
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve("./src/templates/blog.js"),
            context: {
                slug: node.fields.slug,
            },
        })
    })
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
```

### Linking to the dynamically generated pages

> src/components/BlogList.js

```js
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogPost from "./BlogPost"

export default function BlogList() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.allMarkdownRemark.edges.map(edges => (
        <BlogPost
          key={edges.node.id}
          slug={edges.node.fields.slug}
          title={edges.node.frontmatter.title}
          date={edges.node.frontmatter.date}
          excerpt={edges.node.excerpt}
        ></BlogPost>
      ))}
    </div>
  )
}
```

> src/components/BlogPost.js

```js
import React from "react"
import { Link } from "gatsby"
import styles from "./BlogPost.module.css"

export default function BlogPost({ title, date, excerpt, slug }) {
  return (
    <article className={styles.blog}>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      <h3>{date}</h3>
      <p>{excerpt}</p>
    </article>
  )
}
```

### The Gatsby Link component

> src/components/Layout.js

```js
import React from "react"
import { Link } from "gatsby"
import styles from "./Layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <header id={styles.header}>
        <div id={styles.inner}>
          <h1>
            <Link to="/">Artnalyze Coffee Shop</Link>
          </h1>
        </div>
      </header>
      <main id={styles.main}>{children}</main>
    </div>
  )
}
```

> src/components/Layout.module.css

```css
#header {
    font-family: 'Oswald', sans-serif;
    background: url('/coffee.jpg');
    background-size: cover;
    color: #FFFFFF;
}

#header #inner {
    background: rgba(119, 79, 56, 0.85);
    padding: 1rem;
}

#header h1 {
    margin: 0;
}

#header h1 a {
    color: #FFFFFF;
    text-decoration: none;
}
```

## Blog Pagination

### Dynamically creating the blog list pages

```js
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

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

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve("./src/templates/blog.js"),
            context: {
                slug: node.fields.slug,
            },
        })
    })

    const posts = result.data.allMarkdownRemark.edges;
    const pageSize = 5;
    const pageCount = Math.ceil(posts.length/pageSize);
    const tempatePath = path.resolve('src/templates/blog-list.js');

    for(let i = 0; i < pageCount;i++){
      let path = '/blog';
      if(i > 0) {
        path += `/${i + 1}`;
      }
      createPage({
        path,
        component: templatePath,
        context: {
          limit: pageSize,
          skip: i * pageSize,
          pageCount,
          currentPage: i + 1
        }
      })
    }
}
```

### Creating the blog list template page

> src/templates/blog-list.js

```js
import React from 'react';
import { graphql, Link } from 'gatsby';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import styles from './blog-list.module.css';

export default function BlogListTemplate({ data, pageContext}) {
 // Generate the previous and next page URLs.
 const previousPage = pageContext.currentPage === 2 ? '/blog' : `/blog/${pageContext.currentPage - 1}`;
 const nextPage = `/blog/${pageContext.currentPage + 1}`;

 return (
    <Layout>
        <div id={styles.hero}>
            <h1>The Coffee Blog</h1>
        </div>
        <main className={styles.blogList}>
            {data.allMarkdownRemark.edges.map(node => (
                <BlogPost
                key={node.node.id}
                slug={node.node.fields.slug}
                title={node.node.frontmatter.title}
                date={node.node.frontmatter.date}
                excerpt={node.node.excerpt}
                />
            ))}
        </main>
        <div id={styles.pageLinks}>
            {pageContext.currentPage > 1 && (
                <Link to={previousPage}>
                    {"<<"} Previous Page
                </Link>
            )}
            {pageContext.currentPage < pageContext.pageCount && (
                <Link to={nextPage}>
                    Next Page {">>"}
                </Link>
            )}
        </div>
    </Layout>
 )
}

// The page Query
export const query = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM D, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }       
        }
    }
`;
```

### Adding a link to the new blog list page

> src/components/Layout.js

```js
import React from "react"
import { Link } from "gatsby"
import styles from "./Layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <header id={styles.header}>
        <div id={styles.inner}>
          <h1>
            <Link to="/">Artnalyze Coffee Shop</Link>
          </h1>
          <Link to="/blog">Blog</Link>
        </div>
      </header>
      <main id={styles.main}>{children}</main>
    </div>
  )
}
```

> /src/components/Layout.module.css

```css
#header {
    font-family: 'Oswald', sans-serif;
    background: url('/coffee.jpg');
    background-size: cover;
    color: #FFFFFF;
}

#header #inner {
    background: rgba(119, 79, 56, 0.85);
    padding: 1rem;
    display: flex;
    align-items: center;
}

#header h1 {
    margin: 0;
    flex-grow: 1;
}

#header h1 a {
    color: #FFFFFF;
    text-decoration: none;
}

#header a {
    color: #FFFFFF;
    text-decoration: none;
}
```

### updating the index page

> src/components/BlogList.js

```js
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BlogPost from "./BlogPost"

export default function BlogList() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
        ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allMarkdownRemark.edges.map(edge => (
        <BlogPost
          key={edge.node.id}
          slug={edge.node.fields.slug}
          title={edge.node.frontmatter.title}
          date={edge.node.frontmatter.date}
          excerpt={edge.node.excerpt}
        />
      ))}
      <div>
        <Link to="/blog">More ...</Link>
      </div>
    </div>
  );
}
```

## Adding More Content

### The contentKey field

> static/admin/config.yml

```yml
backend:
  name: git-gateway
  branch: master

media_folder: static/img
public_folder: /img

collections:
  - name: "blog"
    label: "Blog"
    folder: "src/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - name: "contentKey"
        widget: "hidden"
        default: "blog"
      - label: "Title"
        name: "title"
        widget: "string"
      - label: "Publish Date"
        name: "date"
        widget: "datetime"
      - label: "Body"
        name: "body"
        widget: "markdown"
```

update to exits file > src/blog/config.yml

```
---
title: Second Blog Post
date: 2020-10-15T08:51:54.500Z
contentKey: blog
---
```

update file

> gatsby-node.js

```js
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

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
            frontmatter {
              contentKey
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve("./src/templates/blog.js"),
            context: {
                slug: node.fields.slug,
            },
        })
    })

    const posts = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.contentKey === 'blog');
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog.js'),
        context: {
          slug: node.fields.slug
        }
      });
    });

    const pageSize = 5;
    const pageCount = Math.ceil(posts.length/pageSize);
    const templatePath = path.resolve('src/templates/blog-list.js');

    for(let i = 0; i < pageCount;i++){
      let path = '/blog';
      if(i > 0) {
        path += `/${i + 1}`;
      }
      createPage({
        path,
        component: templatePath,
        context: {
          limit: pageSize,
          skip: i * pageSize,
          pageCount,
          currentPage: i + 1
        }
      })
    }
}
```

update file

> src/template/blog-list.js 

```js
import React from 'react';
import { graphql, Link } from 'gatsby';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import styles from './blog-list.module.css';

export default function BlogListTemplate({ data, pageContext}) {
 // Generate the previous and next page URLs.
 const previousPage = pageContext.currentPage === 2 ? '/blog' : `/blog/${pageContext.currentPage - 1}`;
 const nextPage = `/blog/${pageContext.currentPage + 1}`;

 return (
    <Layout>
        <div id={styles.hero}>
            <h1>The Coffee Blog</h1>
        </div>
        <main className={styles.blogList}>
            {data.allMarkdownRemark.edges.map(node => (
                <BlogPost
                key={node.node.id}
                slug={node.node.fields.slug}
                title={node.node.frontmatter.title}
                date={node.node.frontmatter.date}
                excerpt={node.node.excerpt}
                />
            ))}
        </main>
        <div id={styles.pageLinks}>
            {pageContext.currentPage > 1 && (
                <Link to={previousPage}>
                    {"<<"} Previous Page
                </Link>
            )}
            {pageContext.currentPage < pageContext.pageCount && (
                <Link to={nextPage}>
                    Next Page {">>"}
                </Link>
            )}
        </div>
    </Layout>
 )
}

// The page Query
export const query = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { contentKey: { eq: "blog" } } }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM D, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }       
        }
    }
`;
```

update file

> src/components/BlogList.js

```js
import React from 'react';
import { graphql, Link } from 'gatsby';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import styles from './blog-list.module.css';

export default function BlogListTemplate({ data, pageContext}) {
 // Generate the previous and next page URLs.
 const previousPage = pageContext.currentPage === 2 ? '/blog' : `/blog/${pageContext.currentPage - 1}`;
 const nextPage = `/blog/${pageContext.currentPage + 1}`;

 return (
    <Layout>
        <div id={styles.hero}>
            <h1>The Coffee Blog</h1>
        </div>
        <main className={styles.blogList}>
            {data.allMarkdownRemark.edges.map(node => (
                <BlogPost
                key={node.node.id}
                slug={node.node.fields.slug}
                title={node.node.frontmatter.title}
                date={node.node.frontmatter.date}
                excerpt={node.node.excerpt}
                />
            ))}
        </main>
        <div id={styles.pageLinks}>
            {pageContext.currentPage > 1 && (
                <Link to={previousPage}>
                    {"<<"} Previous Page
                </Link>
            )}
            {pageContext.currentPage < pageContext.pageCount && (
                <Link to={nextPage}>
                    Next Page {">>"}
                </Link>
            )}
        </div>
    </Layout>
 )
}

// The page Query
export const query = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { contentKey: { eq: "blog" } } }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM D, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }       
        }
    }
`;
```

### Creating a pages collection

update file

> static/admin/config.yml

```
backend:
  name: git-gateway
  branch: master

media_folder: static/img
public_folder: /img

collections:
  - name: "blog"
    label: "Blog"
    folder: "src/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - name: "contentKey"
        widget: "hidden"
        default: "blog"
      - label: "Title"
        name: "title"
        widget: "string"
      - label: "Publish Date"
        name: "date"
        widget: "datetime"
      - label: "Body"
        name: "body"
        widget: "markdown"
  - name: "pages"
    label: "Pages"
    files:
      - file: "src/pageData/index.md"
        label: "Index Page"
        name: "index-page"
        fields:
          - name: "contentKey"
            widget: "hidden"
            default: "indexPage"
          - label: "Tagline"
            name: "tagline"
          - label: "Hero Image"
            name: "heroImage"
            widget: "image"
```

create directory > src/pageData

add file > src/pageData/index.md

```
---
contentKey: indexPage
---
```

### Adding the index page data

upload image to Pages

### Adding another filesystem source

> gatsby-config.js

```js
module.exports = {
    siteMetadata: {
        title: "The Coffee Blog",
    },
    plugins: [
        "gatsby-plugin-netlify-cms",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: "src/blog",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pageData",
                path: "src/pageData",
            },
        },
        "gatsby-transformer-remark",
    ],
}
```

### Using the CMS content in the index page

> pages/index.js

```js
import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import BlogList from "../components/BlogList"

import Layout from "../components/Layout"

import styles from "./index.module.css"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } }) {
        frontmatter {
          tagline
          heroImage
        }
      }
    }
  `);

  const tagline = data.markdownRemark.frontmatter.tagline;
  const heroImage = data.markdownRemark.frontmatter.heroImage;

  return (
    <Layout>
      <div 
        id={styles.hero}
        style={{ backgroundImage: `url('${heroImage}')`}}>
        <h1>{tagline}</h1>
      </div>
      <BlogList/>
    </Layout>
  )
}
```

## Creating the coffee menu

> Nested Lists

### Defining the menu page

> static/admin/config.yml

```yaml
backend:
  name: git-gateway
  branch: master

media_folder: static/img
public_folder: /img

collections:
  - name: "blog"
    label: "Blog"
    folder: "src/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - name: "contentKey"
        widget: "hidden"
        default: "blog"
      - label: "Title"
        name: "title"
        widget: "string"
      - label: "Publish Date"
        name: "date"
        widget: "datetime"
      - label: "Body"
        name: "body"
        widget: "markdown"
  - name: "pages"
    label: "Pages"
    files:
      - file: "src/pageData/index.md"
        label: "Index Page"
        name: "index-page"
        fields:
          - name: "contentKey"
            widget: "hidden"
            default: "indexPage"
          - label: "Tagline"
            name: "tagline"
            widget: "string"
          - label: "Hero Image"
            name: "heroImage"
            widget: "image"
      - file: "src/pageData/menu.md"
        label: "Menu"
        name: "menu"
        fields:
          - name: "contentKey"
            widget: "hidden"
            default: "menu"
          - label: "Title"
            name: "title"
            widget: "string"
          - label: "Categories"
            label_singular: "Category"
            name: "categories"
            widget: "list"
            fields:
                - label: "Name"
                  name: "name"
                  widget: "string"
                - label: "Items"
                  label_singular: "Item"
                  name: "items"
                  widget: "list"
                  fields:
                    - label: "Name"
                      name: "name"
                      widget: "string"
                    - label: "Description"
                      name: "description"
                      widget: "text"
                    - label: "Price"
                      name: "price"
                      widget: "string"

```

### Adding menu items

add item in real site

### Building the menu page

> src/components/Layout.js

```js
import React from "react"
import { Link } from "gatsby"
import styles from "./Layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <header id={styles.header}>
        <div id={styles.inner}>
          <h1>
            <Link to="/">Artnalyze Coffee Shop</Link>
          </h1>
          <Link to="/blog">Blog</Link>
          <Link to="menu">Menu</Link>
        </div>
      </header>
      <main id={styles.main}>{children}</main>
    </div>
  )
}
```

> src/components/Layout.midule.css

```css
#header {
    font-family: 'Oswald', sans-serif;
    background: url('/coffee.jpg');
    background-size: cover;
    color: #FFFFFF;
}

#header #inner {
    background: rgba(119, 79, 56, 0.85);
    padding: 1rem;
    display: flex;
    align-items: center;
}

#header h1 {
    margin: 0;
    flex-grow: 1;
}

#header h1 a {
    color: #FFFFFF;
    text-decoration: none;
}

#header a {
    color: #FFFFFF;
    text-decoration: none;
    margin: 0.5rem;
}
```

> src/components/MenuCategory.js

```js
import React from 'react';
import styles from './MenuCategory.module.css';

export default function MenuCategory({ category }) {
    return ( 
        <div className={styles.category}>
            <h2>{category.name}</h2>
            <ul>
                {category.items.map(item => (
                    <li key={item.name}>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.description}>{item.description}</div>
                        <div>{item.price}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
```

> src/components/MenuCategory.module.css

```css
.category {
    margin: 1rem 2rem;
    width: 15rem;
}

.category h2 {
    margin: 0;
    margin-bottom: 1px solid #774f38;
}

.category ul {
    padding: 0;
}

.category li {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 1rem;
}

.name {
    font-weight: bold;
    font-size: 1.2rem;
}

.description {
    font-style: italic;
}
```

> src/pages/menu.js

```js
import React from 'react';
import Layout from '../components/Layout';
import MenuCategory from '../components/MenuCategory';
import { grapql, useStaticQuery } from 'gatsby';
import styles from './menu.module.css';

export default function Menu(){
    const data = useStaticQuery(graphql`
    {
        markdownRemark(frontmatter: { contentKey: { eq: "menu" } }) {
            frontmatter {
                title
                categories {
                    name
                    items {
                        name
                        description
                        price
                    }
                }
            }
        }
     }
    `);

    return (
        <Layout>
            <div id={styles.main}>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <div id={styles.menu}>
                    {data.markdownRemark.frontmatter.categories.map(category => (
                        <MenuCategory
                         key={category.name}
                         category={category}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    )
}
```

> src/pages/menu.module.css

```css
#main {
    padding: 1rem;
}

#main h1 {
    margin: 0;
}

#menu {
    display: flex;
}
```

> src/pages/menu.md

```md
---
title: Coffee and Bakery Menu
contentKey: menu
categories:
  - name: Iced Drinks
    items:
      - name: Iced Coffee
        description: Fresh brewed and served over ice
        price: $2.49
      - name: Iced Latte
        description: Espresso and chilled milk poured over ice
        price: $3.49
      - name: Iced Tea
        description: Fresh brewed black tea leaves
        price: $2.25
      - name: Iced Mocha
        description: Expresso and mocha sauce, milk and ice, with whipped cream
        price: $3.49
  - name: Hot Drinks
    items:
      - name: Coffee
        description: Fresh brewed Colombian coffee
        price: $1.99
      - name: Cappuccinoa
        description: Expresso with frothed milk
        price: $2.49
      - name: Hot Cocoa
        description: Steamed milk  with chocolate syrup
        price: $1.49
---
```

## Working with Images

```
$ npm install gatsby-plugin-sharp@2.6.17 gatsby-transformer-sharp@2.5.10 gatsby-remark-relative-images@0.3.0 gatsby-remark-images@3.3.17 gatsby-background-image@1.1.1
```

> gatsby-config.js

```js
module.exports = {
    siteMetadata: {
        title: "The Coffee Blog",
    },
    plugins: [
        "gatsby-plugin-netlify-cms",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "static/img",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: "src/blog",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pageData",
                path: "src/pageData",
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
               plugins: [
                   "gatsby-remark-relative-images",
                   "gatsby-remark-images"
               ]
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp"
    ],
}
```

> gatsby-node.js

```js
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = function({ node, getNode, actions }) {
  fmImagesToRelative(node);
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
            frontmatter {
              contentKey
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve("./src/templates/blog.js"),
            context: {
                slug: node.fields.slug,
            },
        })
    })

    const posts = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.contentKey === 'blog');
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog.js'),
        context: {
          slug: node.fields.slug
        }
      });
    });

    const pageSize = 5;
    const pageCount = Math.ceil(posts.length/pageSize);
    const templatePath = path.resolve('src/templates/blog-list.js');

    for(let i = 0; i < pageCount;i++){
      let path = '/blog';
      if(i > 0) {
        path += `/${i + 1}`;
      }
      createPage({
        path,
        component: templatePath,
        context: {
          limit: pageSize,
          skip: i * pageSize,
          pageCount,
          currentPage: i + 1
        }
      })
    }
}
```

## How gatsby-transformer-sharp works

Fixed Images

## GraphQL fragments

```
fragment MenuFields on MarkdownRemark {
  frontmatter {
    title
    categories {
      name
      items {
        name
        description
        price
      }
    }
  }
}
{
  markdownRemark(frontmatter: { contentKey: { eq: "menu" } }) {
    ...MenuFields
  }
}
```

- GatsbyImageSharpFixed
- GatsbyImageSharpFluid

## Using the BackgroundImage component

> src/pages/index.js

```js
import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import BlogList from "../components/BlogList"

import Layout from "../components/Layout"

import styles from "./index.module.css"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } }) {
        frontmatter {
          tagline
          heroImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const tagline = data.markdownRemark.frontmatter.tagline;
  const heroImage = data.markdownRemark.frontmatter.heroImage;

  return (
    <Layout>
      <BackgroundImage 
        id={styles.hero}
        fluid={heroImage.childImageSharp.fluid}>
        <h1>{tagline}</h1>
      </BackgroundImage>
      <BlogList/>
    </Layout>
  )
}
```


## Fixing the header background

moving the image

> static/coffee.jpg >> static/img/coffee.jpg

## Modifying the Layout component to use a static query

> src/components/Layout.js

```js
import React from "react"
import { Link,graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styles from "./Layout.module.css"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: { eq: "coffee.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `);
  
  return (
    <div>
      <BackgroundImage id={styles.header}
      fluid={data.file.childImageSharp.fluid}>
        <div id={styles.inner}>
          <h1>
            <Link to="/">Artnalyze Coffee Shop</Link>
          </h1>
          <Link to="/blog">Blog</Link>
          <Link to="/menu">Menu</Link>
        </div>
      </BackgroundImage>
      <main id={styles.main}>{children}</main>
      <footer>power by gatsby</footer>
    </div>
  )
}
```

> src/components/Layout.module.css

```css
#header {
    font-family: 'Oswald', sans-serif;
    /* background: url('/coffee.jpg'); */
    background-size: cover;
    color: #FFFFFF;
}

#header #inner {
    background: rgba(119, 79, 56, 0.85);
    padding: 1rem;
    display: flex;
    align-items: center;
}

#header h1 {
    margin: 0;
    flex-grow: 1;
}

#header h1 a {
    color: #FFFFFF;
    text-decoration: none;
}

#header a {
    color: #FFFFFF;
    text-decoration: none;
    margin: 0.5rem;
}
```

## Customizing Netlify CMS

### updateing the plugin configuration

> gatsby-config.js

```js
module.exports = {
    siteMetadata: {
        title: "The Coffee Blog",
    },
    plugins: [
        {
            resolve:  "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "static/img",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: "src/blog",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pageData",
                path: "src/pageData",
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
               plugins: [
                   "gatsby-remark-relative-images",
                   "gatsby-remark-images"
               ]
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp"
    ],
}
```

### Adding a custom menu preview

Add directory

> src/cms

Add file 

> src/cms/cms.js

### Refactoring the menu page

> src/pages/menu.js

```js
import React from 'react';
import Layout from '../components/Layout';
import MenuCategory from '../components/MenuCategory';
import { graphql } from 'gatsby';
import styles from './menu.module.css';

export default function Menu({ data }){
    // const data = useStaticQuery(graphql`
    // {
    //     markdownRemark(frontmatter: { contentKey: { eq: "menu" } }) {
    //         frontmatter {
    //             title
    //             categories {
    //                 name
    //                 items {
    //                     name
    //                     description
    //                     price
    //                 }
    //             }
    //         }
    //     }
    //  }
    // `);

    return (
        <Layout>
            <div id={styles.main}>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <div id={styles.menu}>
                    {data.markdownRemark.frontmatter.categories.map(category => (
                        <MenuCategory
                         key={category.name}
                         category={category}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );

    export const query = graphql`
    {
        markdownRemark(frontmatter: { contentKey: { eq: "menu" } }){
            frontmatter {
                title
                categories {
                    name
                    items {
                        name
                        description
                        price
                    }
                }
            }
        }
    }
    `
}
```

## creating the preview component

> src/cms/MenuPreview.js

```js
import React from 'react'
import MenuPage from '../pages/menu'

export default function MenuPreview({ entry }) {
    const menu = entry.getIn(['data']).toJS();

    const data = {
        markdownRemark: {
            frontmatter: {
                ...menu
            }
        }
    }

    return <MenuPage data={data}/>
}
```

> src/cms/cms.js

```js
import CMS from 'netlify-cms-app';
import MenuPreview from './MenuPreview';

CMS.registerPreviewTemplate('menu', MenuPreview);
```

### Refactoring the menu page again

create file 

> src/components/Menu.js

```js
import React from 'react';
import styles from './Menu.module.css';
import MenuCategory from './MenuCategory';

export default function Menu({ data }) {
    return ( 
        <div id={styles.main}>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div id={styles.menu}>
                {data.markdownRemark.frontmatter.categories.map(category => (
                    <MenuCategory
                        key={category.name}
                        category={category}
                    ></MenuCategory>
                ))}
            </div>
        </div>
    );
}
```

> src/components/Menu.module.css

```css
#main {
    padding: 1rem;
}

#main h1 {
    margin: 0;
}

#menu {
    display: flex;
}
```

> src/pages/menu.js

```js
import React from 'react';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import MenuCategory from '../components/MenuCategory';
import { graphql } from 'gatsby';
import styles from './menu.module.css';

export default function MenuPage({ data }){

    return (
        <Layout>
           <Menu data={data}/>
        </Layout>
    );

    export const query = graphql`
    {
        markdownRemark(frontmatter: { contentKey: { eq: "menu" } }){
            frontmatter {
                title
                categories {
                    name
                    items {
                        name
                        description
                        price
                    }
                }
            }
        }
    }
    `
}
```

### Updating the preview component

> src/cms/MenuPreview.js

```js
import React from 'react'
import '../global.css';
import Menu from '../components/Menu';
//import MenuPage from '../pages/menu'

export default function MenuPreview({ entry }) {
    const menu = entry.getIn(['data']).toJS();

    const data = {
        markdownRemark: {
            frontmatter: {
                ...menu
            }
        }
    }

    return <Menu data={data}/>
}
```

> src/components/MenuCategory.js

```
```