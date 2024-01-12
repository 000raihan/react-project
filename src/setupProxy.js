const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    // app.use(createProxyMiddleware('/api', { target: 'http://128.199.87.251:6050' }));
    app.use(createProxyMiddleware('/api', { target: 'http://127.0.0.1:6050' }));
};

