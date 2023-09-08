module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/demovuejs/' : '/',
  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
        
      },
      postcss: {
        // options here will be passed to postcss-loader
      },
    },
  },
}