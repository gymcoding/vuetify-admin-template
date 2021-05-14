module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vuetify-admin-template/' : '/',
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify'
  ],
  productionSourceMap: false,
  outputDir: './dist',
  indexPath: 'index.html',
  runtimeCompiler: true,
}
