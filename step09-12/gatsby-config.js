module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2w5a71lfuqa4`,
        accessToken: `uvgiXEdKuGKQ3HmGZWGSaOnb5B3mCzEweEmIKl3f4Pc`,
      },
    },
  ],
};