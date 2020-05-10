const assert = require('assert');
const app = require('../../src/app');

describe('\'requestout\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/request/out');

    assert.ok(service, 'Registered the service');
  });
});
