'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import SorcererScrolls from 'components/SorcererScrolls.js';

describe('SorcererScrolls', () => {
    let SorcererScrollsComponent;

    beforeEach(() => {
        SorcererScrollsComponent = createComponent(SorcererScrolls);
    });

    it('should have its component name as default className', () => {
        expect(SorcererScrollsComponent._store.props.className).toBe('SorcererScrolls');
    });
});
