'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import PaladinWand from 'components/PaladinWand.js';

describe('PaladinWand', () => {
    let PaladinWandComponent;

    beforeEach(() => {
        PaladinWandComponent = createComponent(PaladinWand);
    });

    it('should have its component name as default className', () => {
        expect(PaladinWandComponent._store.props.className).toBe('PaladinWand');
    });
});
