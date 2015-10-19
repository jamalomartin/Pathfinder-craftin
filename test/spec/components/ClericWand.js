'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import ClericWand from 'components/ClericWand.js';

describe('ClericWand', () => {
    let ClericWandComponent;

    beforeEach(() => {
        ClericWandComponent = createComponent(ClericWand);
    });

    it('should have its component name as default className', () => {
        expect(ClericWandComponent._store.props.className).toBe('ClericWand');
    });
});
