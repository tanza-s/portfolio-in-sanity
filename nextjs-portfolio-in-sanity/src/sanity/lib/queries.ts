import {defineQuery} from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`)

export const PROJECTS_QUERY = defineQuery(`*[_type == "project" && defined(slug.current)][0...12]{
  _id, title, slug
}`) 

export const PROJECT_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  title, body, mainImage
}`)

export const PAGES_QUERY = defineQuery(`*[_type == "page" && defined(slug.current)][0...12]{
  _id, title, slug
}`) 

// ...all other queries

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  content[]{
    ...,
    _type == "faqs" => {
      ...,
      faqs[]->
    }
  }
}`);