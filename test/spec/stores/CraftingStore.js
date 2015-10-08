'use strict';

describe('CraftingStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/CraftingStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
