import { useContext } from 'react';
import styled from 'styled-components';

import { flexBetween } from 'style/mixins';
import WalletItem from './WalletItem';
import { minusQuantity } from 'utility/fixData';
import { progressContext } from 'contexts/ProgressProvider';

function WalletCoinBox({ coinData, setCoinData, totalMoney, setTotalMoney }) {
  const { addMoneyMessage } = useContext(progressContext);

  const putMoneyVM = (id) => () => {
    const selectedItem = coinData.find((data) => data.id === id);

    if (!selectedItem || !selectedItem.quantity) return;

    addMoneyMessage(+selectedItem.unit);
    setTotalMoney(totalMoney + selectedItem.unit);
    minusQuantity(coinData, setCoinData, selectedItem);
  };

  return (
    <>
      {coinData.map(({ id, unit, quantity }) => (
        <WalletList key={id}>
          <WalletItem
            id={id}
            unit={unit}
            quantity={quantity}
            onClick={putMoneyVM}
          />
        </WalletList>
      ))}
    </>
  );
}

const WalletList = styled.li`
  ${flexBetween}
  font-size: 30px;
`;

export default WalletCoinBox;
