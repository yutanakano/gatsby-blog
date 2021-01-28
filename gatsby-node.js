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

// CategoryPage作成
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return graphql(`
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
        component: path.resolve("./src/templates/Category.js"),
        context: {
          category: category.fieldValue
        }
      });
    });
  });
};

// TagPage作成
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMdx(limit: 2000) {
        group(field: frontmatter___tag) {
          fieldValue
        }
      }
    }
  `).then(result => {
    result.data.allMdx.group.map(tag => {
      createPage({
        path: `tags/${tag.fieldValue}`,
        component: path.resolve("./src/templates/Tag.js"),
        context: {
          tag: tag.fieldValue
        }
      });
    });
  });
};