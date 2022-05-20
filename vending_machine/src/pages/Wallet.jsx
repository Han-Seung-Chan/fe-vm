import { useContext } from 'react';
import styled from 'styled-components';

import SumMoney from 'components/SumMoney';
import TotalMoney from 'components/TotalMoney';
import WalletCoinBox from 'components/WalletCoinBox';
import { CoinDataContext } from 'context/CoinDataProvider';
import { TotalMoneyContext } from 'context/TotalMoneyProvider';

function Wallet() {
  const [coinData, setCoinData] = useContext(CoinDataContext);
  const [totalMoney, setTotalMoney] = useContext(TotalMoneyContext);

  return (
    <WalletContainer>
      <WalletCoinBox
        coinData={coinData}
        setCoinData={setCoinData}
        totalMoney={totalMoney}
        setTotalMoney={setTotalMoney}
      />
      <TotalMoney totalMoney={totalMoney} />
      <SumMoney coinData={coinData} />
    </WalletContainer>
  );
}

const WalletContainer = styled.ul`
  margin: 0 auto;
  width: 400px;
  height: 1000px;
  border: 2px solid black;
`;

export default Wallet;
