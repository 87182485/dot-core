var isProd = (process.env.NODE_ENV === 'production');

module.exports = isProd ? require('./webpack.prod.js') : require('./webpack.dev.js');