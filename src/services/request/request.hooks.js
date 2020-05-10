const { authenticate } = require('@feathersjs/authentication').hooks;

const filterpass = require('../../hooks/filterpass');
const process = require('../../hooks/process');

const filterpopulate = require('../../hooks/filterpopulate');

module.exports = {
  before: {
    all: [],
    find: [process()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
    // remove: [authenticate('jwt')],
  },

  after: {
    all: [],
    find: [filterpopulate(), filterpass()],
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
