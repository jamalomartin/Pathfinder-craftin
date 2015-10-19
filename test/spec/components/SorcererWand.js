'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import SorcererWand from 'components/SorcererWand.js';

describe('SorcererWand', () => {
    let SorcererWandComponent;

    beforeEach(() => {
        SorcererWandComponent = createComponent(SorcererWand);
    });

    it('should have its component name as default className', () => {
        expect(SorcererWandComponent._store.props.className).toBe('SorcererWand');
    });
});
