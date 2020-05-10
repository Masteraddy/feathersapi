/* eslint-disable no-console */
// const functions = require('firebase-functions');
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

// exports.app = functions.https.onRequest(app);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason),
);

server.on('listening', () =>
  logger.info(
    'Feathers application started on http://%s:%d',
    app.get('host'),
    port,
  ),
);
