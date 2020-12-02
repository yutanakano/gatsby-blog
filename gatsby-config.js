module.exports = {
  plugins: [
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
    description: `全人類同時接続数No1のバトルロワイヤル人生ゲームを生き残れ!`,
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
