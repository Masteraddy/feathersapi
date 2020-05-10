const assert = require('assert');
const app = require('../../src/app');

describe('\'property\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/property');

    assert.ok(service, 'Registered the service');
  });
});
