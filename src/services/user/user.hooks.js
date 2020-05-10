const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword,
  protect,
} = require('@feathersjs/authentication-local').hooks;

const filterpass = require('../../hooks/filterpass');

const checker = require('../../hooks/checker');

module.exports = {
  before: {
    all: [],
    find: [checker()],
    get: [checker()],
    create: [hashPassword('password'), checker()],
    update: [hashPassword('password'), authenticate('jwt')],
    patch: [hashPassword('password'), authenticate('jwt')],
    remove: [authenticate('jwt')],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password'),
    ],
    find: [],
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
