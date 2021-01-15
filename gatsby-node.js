const resolve = require("path").resolve
exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: resolve(__dirname, "src/components"),
      },
    },
  })
}
