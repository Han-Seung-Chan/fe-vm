import styled from 'styled-components';
import { changeKoreanLocalMoney } from 'utility/changeValue';

import Button from './common/Button';

function WalletItem({ id, unit, quantity, onClick }) {
  return (
    <>
      <StyledItem
        content={`${changeKoreanLocalMoney(unit)}원`}
        disabled={false}
        onClick={onClick(id)}
      />
      <StyledItem as="span">{quantity}개</StyledItem>
    </>
  );
}

const StyledItem = styled(Button)`
  width: 50%;
  border: 2px solid black;
  margin: 20px 20px;
  padding: 10px;
`;

export default WalletItem;
