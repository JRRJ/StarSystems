import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => (
    <div>
        <h2>System List</h2>
        {data.starSystems.starSystems.map(({ systemName, starSystemId }) => (
            <div key={starSystemId}>
                <Link to={`/system/${systemName}`}>{systemName}</Link>
            </div>
        ))}
    </div>
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