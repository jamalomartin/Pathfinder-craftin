'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import RangerWand from 'components/RangerWand.js';

describe('RangerWand', () => {
    let RangerWandComponent;

    beforeEach(() => {
        RangerWandComponent = createComponent(RangerWand);
    });

    it('should have its component name as default className', () => {
        expect(RangerWandComponent._store.props.className).toBe('RangerWand');
    });
});
