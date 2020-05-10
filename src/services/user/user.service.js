// Initializes the `user` service on path `/api/user`
const { User } = require('./user.class');
const hooks = require('./user.hooks');
const createModel = require('../../models/user.model');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    // paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/api/user', new User(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/user');

  service.hooks(hooks);
};
