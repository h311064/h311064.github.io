const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Middleware to proxy requests
app.use('/proxy', createProxyMiddleware({
    target: '', // Set this to the URL you want to proxy
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '', // Remove '/proxy' from the URL
    },
}));

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
