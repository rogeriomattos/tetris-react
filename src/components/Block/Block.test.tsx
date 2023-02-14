import { render } from '@testing-library/react';
import Block from '.';
import { BlockTypes } from '../../enums/blockTypes';

describe('components/Block', () => {
    it('Should render correctly', () => {
        const { container } = render(<Block type={BlockTypes.EMPTY}/>);
        expect(container).toMatchSnapshot();
    })
});