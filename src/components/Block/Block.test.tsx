import { render } from '@testing-library/react';
import Block from '.';

describe('components/Block', () => {
    it('Should render correctly', () => {
        const { container } = render(<Block/>);
        expect(container).toMatchSnapshot();
    })
});