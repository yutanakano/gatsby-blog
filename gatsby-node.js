const path = require("path");

// pathのalias
const resolve = path.resolve
exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: resolve(__dirname, "src/components"),
        gatsbyThemeBlog: resolve(__dirname, "node_modules/gatsby-theme-blog/src"),
      },
    },
  })
}

// 各種ページの作成
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return (
    // CategoryPage作成
    graphql(`
      {
        allMdx(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `).then(result => {
      result.data.allMdx.group.map(category => {
        createPage({
          path: `categories/${category.fieldValue}`,
          component: path.resolve("./src/templates/Category.tsx"),
          context: {
            category: category.fieldValue
          }
        });
      });
    }),
    // TagPage作成
    graphql(`
      {
        allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `).then(result => {
      result.data.allMdx.group.map(tag => {
        createPage({
          path: `tag/${tag.fieldValue}`,
          component: path.resolve("./src/templates/Tag.tsx"),
          context: {
            tag: tag.fieldValue
          }
        });
      });
    })
  );
};