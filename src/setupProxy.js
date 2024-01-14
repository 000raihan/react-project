const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    // app.use(createProxyMiddleware('/api', { target: 'http://128.199.87.251:6050' }));
    app.use(createProxyMiddleware('/api', { target: 'http://116.68.200.97:6050' }));
    // app.use(createProxyMiddleware('/upload', { target: 'http://116.68.200.97:6050/upload' }));
    // app.use(createProxyMiddleware('/api', { target: 'http://127.0.0.1:6050' }));
};

