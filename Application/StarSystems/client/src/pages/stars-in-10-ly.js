import React from "react"
import { Link, graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SceneComponent from "../components/sceneComponent"
import StarSystemsScene from "../scenes/StarSystemsScene"

export default ({ data }) => (
    <Layout>
        <div sx={{
            border: `1px solid black`
        }}>
            3d map placeholder
            <SceneComponent scene={StarSystemsScene(data.starSystems)} />
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
                x
                y
                z
                stars {
                    starId
                    radius
                    temperature
                }
            }
        }
    }
`