const
    express = require('express'),
    healthcheck = require('express-healthcheck'),
    path = require('path');

module.exports = express().
    use(errorHandler).
    use(contentAt('./public')).
    use('/todomvc-app-css', contentAt('./../node_modules/todomvc-app-css')).
    use('/todomvc-common', contentAt('./../node_modules/todomvc-common')).
    use('/vue', contentAt('./../node_modules/vue/dist')).
    use('/healthcheck', healthcheck())
;

function errorHandler (err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function contentAt(relativePath) {
    return express.static(path.resolve(__dirname, relativePath));
}
