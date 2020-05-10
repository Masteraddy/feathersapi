// Initializes the `testing` service on path `/api/test`
const { Testing } = require('./testing.class');
const createModel = require('../../models/test.model');
const hooks = require('./testing.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    // paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/api/test', new Testing(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/test');

  service.hooks(hooks);
};
