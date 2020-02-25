import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { Index } from "elasticlunr"

import Layout from "../components/layout"

export default ({ data }) => {
  let index
  const [query, setQuery] = useState(``)
  const [results, setResults] = useState([])
  
  const getOrCreateIndex = () =>
    index ? index : Index.load(data.siteSearchIndex.index)

  const search = (event) => {
    setQuery(event.target.value)
    index = getOrCreateIndex()
    setResults(index
      .search(query, { expand: true })
      .map(({ ref }) => index.documentStore.getDoc(ref)))
  }

  return (
    <Layout>
      <div>
        <input type="text" value={query} onChange={search} />
        <ul>
          {results.map(page => (
            <li key={page.id}>
              <Link to={"/" + page.path}>{page.systemName}</Link>
              {": " + page.starNames.join(`,`)}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`
