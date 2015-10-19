'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WandDisplay from 'components/WandDisplay.js';

describe('WandDisplay', () => {
    let WandDisplayComponent;

    beforeEach(() => {
        WandDisplayComponent = createComponent(WandDisplay);
    });

    it('should have its component name as default className', () => {
        expect(WandDisplayComponent._store.props.className).toBe('WandDisplay');
    });
});
