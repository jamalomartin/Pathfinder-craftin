'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import PaladinScrolls from 'components/PaladinScrolls.js';

describe('PaladinScrolls', () => {
    let PaladinScrollsComponent;

    beforeEach(() => {
        PaladinScrollsComponent = createComponent(PaladinScrolls);
    });

    it('should have its component name as default className', () => {
        expect(PaladinScrollsComponent._store.props.className).toBe('PaladinScrolls');
    });
});
