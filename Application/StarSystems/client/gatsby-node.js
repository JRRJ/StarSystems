process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      starSystems {
        starSystems {
          distance
          starSystemId
          systemName
          star {
            starId
            spectralType
            absoluteMagniude
            mass
            temperature
            luminosity
            starName
            planets {
              id
              planetName
              mass
              radius
              temperature
              discoveryMethod
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
  data.starSystems.starSystems.forEach(({ systemName, distance, star }) => {
    actions.createPage({
      path: `system/${systemName}`,
      component: path.resolve(`./src/components/starSystem.js`),
      context: {
        name: systemName,
        distance: distance,
        stars: star,
        starCount: star.length,
      },
    })
  })
}