'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import BardScrolls from 'components/BardScrolls.js';

describe('BardScrolls', () => {
    let BardScrollsComponent;

    beforeEach(() => {
        BardScrollsComponent = createComponent(BardScrolls);
    });

    it('should have its component name as default className', () => {
        expect(BardScrollsComponent._store.props.className).toBe('BardScrolls');
    });
});
