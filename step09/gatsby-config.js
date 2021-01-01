module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lz3zfxxi2p7v`,
        accessToken: `yDI0b8qXOBAFMWxdKErUYpKPpBr-yObb7oPDxBScBGQ`,
      },
    },
  ],
};