'use strict';

describe('Crafting2App', () => {
  let React = require('react/addons');
  let Crafting2App, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    Crafting2App = require('components/Crafting2App.js');
    component = React.createElement(Crafting2App);
  });

  it('should create a new instance of Crafting2App', () => {
    expect(component).toBeDefined();
  });
});
