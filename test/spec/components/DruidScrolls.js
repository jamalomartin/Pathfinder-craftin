'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import DruidScrolls from 'components/DruidScrolls.js';

describe('DruidScrolls', () => {
    let DruidScrollsComponent;

    beforeEach(() => {
        DruidScrollsComponent = createComponent(DruidScrolls);
    });

    it('should have its component name as default className', () => {
        expect(DruidScrollsComponent._store.props.className).toBe('DruidScrolls');
    });
});
