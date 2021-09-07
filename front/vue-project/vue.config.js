const target = 'http://localhost:8080/';

module.exports = {
    devServer: {
      port: 8081,
      proxy: {
          '^/api' : {
              target,
              changeOrigin: true
          }
      }
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch');
    }
}