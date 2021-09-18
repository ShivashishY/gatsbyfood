module.exports = {
  siteMetadata: {
    title: `Shivashish`,
    description: `Indian Food`,
    author: "Shivashish",
    name: `Shivashish`,
    tagline: `Indian Food`,
    menuLinks: [
      {
        name: "About",
        url: "/about/",
        type: "internal" // internal or anchor
      },
    ],
    social: [
      {
        name: `Facebook`,
        url: `https://www.facebook.com/shivashish.ydv/`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/ShivashishYadav`,
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/shivashish.yadav/`,
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
      options: {
        disableContact: `true`,

      },
    },
    
  ],
}
