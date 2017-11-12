const env = {
  development: {
    serverApi: 'https://127.0.0.1:30081/webapi',
    isProduction: false
  },
  production: {
    serverApi: 'https://127.0.0.1:30081/webapi',
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  app: {
    BaseName: '/react/',
    BuildPath: '/dist/react'
  }
}, env);
