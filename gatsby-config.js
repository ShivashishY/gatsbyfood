module.exports = {
  siteMetadata: {
    title: `Shivashish`,
    description: `Indian Food`,
    author: "Shivashish",
    name: `Shivashish`,
    tagline: `Indian Food`,
    social: [
      {
        name: `Facebook`,
        url: `https://facebook.com`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shivashish`,
        short_name: `Shivashish`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        icon: `content/assets/icon.png`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-theme-serena`,
      options: {},
    },
    
  ],
}
