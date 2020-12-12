module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    `gatsby-theme-blog-darkmode`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `生存戦略しましょうか`,
    author: `yutanakano_net`,
    description: `全人類同時接続数No.1!バトルロイヤルゲームを生き残れ!`,
    siteUrl: `https://yutanakano.net`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/yutanakano_net`,
      },
      {
        name: `github`,
        url: `https://github.com/yutanakano`,
      },
    ],
  },
}
