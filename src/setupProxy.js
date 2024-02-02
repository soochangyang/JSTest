const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    //'/api',
    '/music',
    createProxyMiddleware({
      target: 'http://localhost:8087',
      changeOrigin: true,
    })
  );
};