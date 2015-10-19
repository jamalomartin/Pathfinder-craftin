'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import BardWand from 'components/BardWand.js';

describe('BardWand', () => {
    let BardWandComponent;

    beforeEach(() => {
        BardWandComponent = createComponent(BardWand);
    });

    it('should have its component name as default className', () => {
        expect(BardWandComponent._store.props.className).toBe('BardWand');
    });
});
