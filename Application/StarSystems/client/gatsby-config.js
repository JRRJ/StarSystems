module.exports = {
    siteMetadata: {
        title: `Near Stars`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@jrrj`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName: "starSystems",
                fieldName: "starSystems",
                url: "https://localhost:44302/graphql"
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-theme-ui`,
        {
            resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
            options: {
              // Fields to index
              fields: [`systemName`, `starNames`],
              // How to resolve each field`s value for a supported node type
              resolvers: {
                // For any node of type MarkdownRemark, list how to resolve the fields` values
                SitePage: {
                  path: node => node.path,
                  systemName: node => node.context.name,
                  starNames: node => node.context.stars.map(s => s.starName)
                },
              },
              filter: (node, getNode) => 
                node.path.includes(`system/`)
            },
          },
    ],
}
