module.exports = {
    siteMetadata: {
        title: "Gatsby's Pizzeria",
        description: 'Pizzeria restaurant site made with GatsbyJS.',
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-root-import`,
        'gatsby-plugin-react-svg',
        'gatsby-plugin-react-leaflet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
    ],
};
