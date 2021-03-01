module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/_variables.scss";
`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/RTLogicLLCTestCase/'
    : '/'
}
