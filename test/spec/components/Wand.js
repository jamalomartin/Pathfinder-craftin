'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Wand from 'components/Wand.js';

describe('Wand', () => {
    let WandComponent;

    beforeEach(() => {
        WandComponent = createComponent(Wand);
    });

    it('should have its component name as default className', () => {
        expect(WandComponent._store.props.className).toBe('Wand');
    });
});
