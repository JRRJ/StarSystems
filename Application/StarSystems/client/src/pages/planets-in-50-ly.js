import React from "react"
import { Link, graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SceneComponent from "../components/sceneComponent"
import StarSystemsScene from "../scenes/StarSystemsScene"

export default ({ data }) => {
    console.log(data.starSystems.starSystems)
    const systemsWithPlanets = data.starSystems.starSystems.filter(ss => ss.stars.reduce((planetCount, star) => star.planets.length + planetCount, 0))
    console.log(systemsWithPlanets)

    return(
    <Layout>
        <SceneComponent scene={StarSystemsScene({ starSystems: systemsWithPlanets })} />
        <ol>
        {systemsWithPlanets.map(({ stars, systemName, starSystemId }) => (
            <li key={starSystemId}>
                <Link to={`/system/${systemName}`}>{systemName}</Link>
                - Stars: {stars.length} - Planets: {stars.reduce((totalPlanets, star) => totalPlanets + star.planets.length ,0)}
            </li>
        ))}
        </ol>
    </Layout>
)}
    
export const query = graphql`
    query {
        starSystems {
            starSystems(withinLightYearsOfEarth: 50) {
                systemName
                starSystemId
                x
                y
                z
                stars {
                    starId
                    radius
                    temperature
                    planets {
                        id
                    }
                }
            }
        }
    }
`