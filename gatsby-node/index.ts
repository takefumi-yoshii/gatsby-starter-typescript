import { GatsbyNode } from "gatsby"
import { createAutorPages } from './createAutorPages'
// ______________________________________________________
//
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => Promise.all([
  await createAutorPages({ graphql, createPage })
])
