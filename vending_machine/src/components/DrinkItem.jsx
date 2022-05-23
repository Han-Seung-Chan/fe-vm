import styled from 'styled-components';

import { color } from 'style/variables';
import { changeKoreanLocalMoney } from 'utility/changeValue';
import Button from './common/Button';

function DrinkItem({
  drinkInfo: { id, price, name, quantity, soldOut, totalMoney, onClick },
}) {
  return (
    <DrinkMenuItem
      soldOut={soldOut}
      quantity={quantity}
      price={price}
      totalMoney={totalMoney}
    >
      <DrinkNameBtn content={name} disabled={false} onClick={onClick(id)} />
      <DrinkInfo>
        {+quantity ? changeKoreanLocalMoney(price) : '품절'}
      </DrinkInfo>
      <DrinkInfo>{quantity}</DrinkInfo>
    </DrinkMenuItem>
  );
}

const DrinkMenuItem = styled.li`
  width: 25%;
  border: ${({ quantity, totalMoney, price }) =>
    !quantity
      ? `2px solid ${color.black} `
      : totalMoney >= price
      ? `2px solid ${color.blue} `
      : `2px solid ${color.black} `};
  background-color: ${({ soldOut }) => (soldOut ? color.red : '')};
  margin: 15px;
`;

const DrinkNameBtn = styled(Button)`
  width: 100%;
  padding: 10px;
  font-weight: bold;
`;

const DrinkInfo = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export default DrinkItem;
