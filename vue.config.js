const { defineConfig } = require("@vue/cli-service");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      plugins: [new DirectoryNamedWebpackPlugin(true)],
    },
  },
});
