// Initializes the `service` service on path `/api/service`
const { Services } = require('./service.class');
const createModel = require('../../models/service.model');
const hooks = require('./service.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    // paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/service', new Services(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/service');

  service.hooks(hooks);
};
