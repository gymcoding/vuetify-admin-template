module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vuetify-admin-template/' : '/',
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler: true
}
