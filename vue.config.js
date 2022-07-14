module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://serve.lyaayl.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
}
