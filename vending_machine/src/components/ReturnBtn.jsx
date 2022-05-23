import { useContext } from 'react';
import styled from 'styled-components';

import { color, fontSize } from 'style/variables';
import Button from './common/Button';
import { progressContext } from 'contexts/ProgressProvider';
import { CoinDataContext } from 'contexts/CoinDataProvider';

function ReturnBtn({ totalMoney, setTotalMoney }) {
  const { returnMoneyMessage } = useContext(progressContext);
  const [coinData, setCoinData] = useContext(CoinDataContext);

  function divideInputMoney(money) {
    const currencies = [10000, 5000, 1000, 500, 100, 50, 10];
    const inputMoneyArr = [];
    let i = 0;

    while (i < currencies.length) {
      const currency = currencies[i];
      if (money >= currency) {
        inputMoneyArr.push({
          id: currency,
          unit: currency,
          quantity: parseInt(money / currency),
        });
        money = money - currency * parseInt(money / currency);
      }
      i++;
    }

    return inputMoneyArr;
  }

  function returnInputMoney(inputMoneyArr) {
    const newCoinData = [...coinData];

    coinData.map((currency) =>
      // eslint-disable-next-line array-callback-return
      inputMoneyArr.map((walletCurrency) => {
        if (currency.unit === walletCurrency.unit) {
          changeCoinData(newCoinData, currency, walletCurrency);
        }
      })
    );

    setCoinData(newCoinData);
    setTotalMoney(0);
  }

  function changeCoinData(newCoinData, currency, walletCurrency) {
    newCoinData[newCoinData.findIndex((el) => el.unit === currency.unit)] = {
      id: currency.unit,
      unit: currency.unit,
      quantity: walletCurrency.quantity + currency.quantity,
    };
  }

  return (
    <StyledBtn
      content="반환"
      disabled={false}
      onClick={() => {
        returnInputMoney(divideInputMoney(totalMoney));
        returnMoneyMessage(totalMoney);
      }}
    />
  );
}

const StyledBtn = styled(Button)`
  margin-top: 20px;
  font-size: ${fontSize.xl};
  width: 270px;
  height: 60px;
  border: 2px solid ${color.gray};
`;

export default ReturnBtn;
