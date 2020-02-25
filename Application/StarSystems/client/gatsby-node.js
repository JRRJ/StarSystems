process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      starSystems {
        starSystems {
          distance
          x
          y
          z
          starSystemId
          systemName
          stars {
            starId
            spectralType
            absoluteMagnitude
            mass
            temperature
            luminosity
            starName
            discoveryYear
            planets {
              id
              planetName
              mass
              radius
              temperature
              discoveryMethod
              discoveryYear
              orbit {
                period
                semiMajorAxis
                eccentricity
                inclination
              }
            }
          }
        }
      }
    }
  `)
  data.starSystems.starSystems.forEach(({ systemName, distance, stars }) => {
    actions.createPage({
      path: `system/${systemName}`,
      component: path.resolve(`./src/components/starSystem.js`),
      context: {
        name: systemName,
        distance: distance,
        stars: stars,
        starCount: stars.length,
      },
    })
  })
}