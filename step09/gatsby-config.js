module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `86xrltf5s3li`,
        accessToken: `L7ZRqPwiuCFGlIpsLqsAGRbJZtjmij3cVi0rWWLDCTc`,
      },
    },
  ],
};