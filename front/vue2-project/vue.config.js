module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            '/posts': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        }
    }
}