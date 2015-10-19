'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WizardWand from 'components/WizardWand.js';

describe('WizardWand', () => {
    let WizardWandComponent;

    beforeEach(() => {
        WizardWandComponent = createComponent(WizardWand);
    });

    it('should have its component name as default className', () => {
        expect(WizardWandComponent._store.props.className).toBe('WizardWand');
    });
});
