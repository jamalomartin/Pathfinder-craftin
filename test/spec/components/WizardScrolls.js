'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WizardScrolls from 'components/WizardScrolls.js';

describe('WizardScrolls', () => {
    let WizardScrollsComponent;

    beforeEach(() => {
        WizardScrollsComponent = createComponent(WizardScrolls);
    });

    it('should have its component name as default className', () => {
        expect(WizardScrollsComponent._store.props.className).toBe('WizardScrolls');
    });
});
