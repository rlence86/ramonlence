module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Ramon Lence's dev blog`,
    author: `Ramon Lence`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/lence_dev`,
      },
      {
        name: `github`,
        url: `https://github.com/rlence86`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
