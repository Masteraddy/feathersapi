const { authenticate } = require('@feathersjs/authentication').hooks;
const filterpass = require('../../hooks/filterpass');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [authenticate('jwt')],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [filterpass()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
