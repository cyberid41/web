var config             = require('./server/config'),
    errors             = require('./server/errorHandling');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function startGanapatihRealtimeEngine(app) {
    var ganapatih = require('./server');
    ganapatih(app, config);
}

module.exports = startGanapatihRealtimeEngine;