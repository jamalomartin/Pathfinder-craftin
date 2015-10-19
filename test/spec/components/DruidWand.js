'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import DruidWand from 'components/DruidWand.js';

describe('DruidWand', () => {
    let DruidWandComponent;

    beforeEach(() => {
        DruidWandComponent = createComponent(DruidWand);
    });

    it('should have its component name as default className', () => {
        expect(DruidWandComponent._store.props.className).toBe('DruidWand');
    });
});
