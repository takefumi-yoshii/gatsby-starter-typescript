import path from "path"
import { Actions, CreatePagesArgs } from "gatsby"
import { Site, SiteSiteMetadataAuthors } from "../types/graphql-types"
// ______________________________________________________
//
type Result = {
  site: Site
}
export type AuthorPageContext = {
  author: SiteSiteMetadataAuthors
}
// ______________________________________________________
//
const query = `
{
  site {
    siteMetadata {
      title
      authors {
        name
        slug
      }
    }
  }
}
`
// ______________________________________________________
//
export const createAutorPages = async ({ graphql, createPage }: {
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage']
}) => {
  const result = await graphql<Result>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }
  const { siteMetadata } = result.data.site
  if (!siteMetadata || !siteMetadata.authors) {
    throw new Error("undefined authors")
  }

  for (let author of siteMetadata.authors) {
    if (author) {
      createPage<AuthorPageContext>({
        path: `/authors/${author.slug}/`,
        component: path.resolve("src/templates/author.tsx"),
        context: { author }
      })
    }
  }
}
