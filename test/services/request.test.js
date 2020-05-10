const assert = require('assert');
const app = require('../../src/app');

describe('\'request\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/request');

    assert.ok(service, 'Registered the service');
  });
});
