const mongoose = require('mongoose');
const logger = require('./logger');
const mongodb =
  'mongodb+srv://eliteaddy:adeshile@cluster0-ufp8b.mongodb.net/green-test?retryWrites=true';
// app.get('mongodb')
module.exports = function (app) {
  mongoose
    .connect(mongodb, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      logger.error(err);
      process.exit(1);
    });

  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
