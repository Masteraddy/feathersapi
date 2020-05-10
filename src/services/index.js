const users = require('./users/users.service.js');
const service = require('./service/service.service.js');
const user = require('./user/user.service.js');
const request = require('./request/request.service.js');
const testing = require('./testing/testing.service.js');
const property = require('./property/property.service.js');
const location = require('./location/location.service.js');
const requestout = require('./requestout/requestout.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(service);
  app.configure(user);
  app.configure(request);
  app.configure(testing);
  app.configure(property);
  app.configure(location);
  app.configure(requestout);
};
