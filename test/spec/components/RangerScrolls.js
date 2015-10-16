'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import RangerScrolls from 'components/RangerScrolls.js';

describe('RangerScrolls', () => {
    let RangerScrollsComponent;

    beforeEach(() => {
        RangerScrollsComponent = createComponent(RangerScrolls);
    });

    it('should have its component name as default className', () => {
        expect(RangerScrollsComponent._store.props.className).toBe('RangerScrolls');
    });
});
