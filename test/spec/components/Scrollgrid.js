'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Scrollgrid from 'components/Scrollgrid.js';

describe('Scrollgrid', () => {
    let ScrollgridComponent;

    beforeEach(() => {
        ScrollgridComponent = createComponent(Scrollgrid);
    });

    it('should have its component name as default className', () => {
        expect(ScrollgridComponent._store.props.className).toBe('Scrollgrid');
    });
});
