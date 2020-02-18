import React from "react"
import { Link, graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"

export default ({ data }) => (
    <Layout>
        <div sx={{
            border: `1px solid black`
        }}>
            3d map placeholder
        </div>
        <h2>System List</h2>
        {data.starSystems.starSystems.map(({ systemName, starSystemId }) => (
            <div key={starSystemId}>
                <Link to={`/system/${systemName}`}>{systemName}</Link>
            </div>
        ))}
    </Layout>
)
    
export const query = graphql`
    query {
        starSystems {
            starSystems {
                systemName
                starSystemId
            }
        }
    }
`