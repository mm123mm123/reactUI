import * as renderer from 'react-test-renderer';
import Button from '../Button';
import * as React from 'react';

describe('button', () => {
    it('是个div', () => {
        const json = renderer.create(<Button/>).toJSON();
        expect(json).toMatchSnapshot();
    });
});