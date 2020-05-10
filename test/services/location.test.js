const assert = require('assert');
const app = require('../../src/app');

describe('\'location\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/location');

    assert.ok(service, 'Registered the service');
  });
});
