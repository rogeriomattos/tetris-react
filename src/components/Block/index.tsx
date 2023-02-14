import { BlockItem } from '../../types/blockItem';
import { BlockContainer } from './styles';

const Block = ({
    type,
    color
}: BlockItem) => (
    <BlockContainer 
        type={type}
        blockColor={color}
        data-testid="block"
    />
);

export default Block;