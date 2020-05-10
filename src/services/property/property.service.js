// Initializes the `property` service on path `/api/property`
const { Property } = require('./property.class');
const createModel = require('../../models/property.model');
const hooks = require('./property.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    // paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/property', new Property(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/property');

  service.hooks(hooks);
};
