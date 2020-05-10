// Initializes the `requestout` service on path `/api/request/out`
const { Requestout } = require('./requestout.class');
const createModel = require('../../models/requestout.model');
const hooks = require('./requestout.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    // paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/api/requests/out', new Requestout(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/requests/out');

  service.hooks(hooks);
};
