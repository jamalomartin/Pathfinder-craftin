'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import ClericScrolls from 'components/ClericScrolls.js';

describe('ClericScrolls', () => {
    let ClericScrollsComponent;

    beforeEach(() => {
        ClericScrollsComponent = createComponent(ClericScrolls);
    });

    it('should have its component name as default className', () => {
        expect(ClericScrollsComponent._store.props.className).toBe('ClericScrolls');
    });
});
