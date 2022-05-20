import React, { useEffect, useMemo, useState } from 'react';
import { getData } from 'utility/fetch';

export const CoinDataContext = React.createContext();

function CoinDataProvider({ children }) {
  const [coinData, setCoinData] = useState([]);

  const coinDataState = useMemo(() => [coinData, setCoinData], [coinData]);

  useEffect(() => {
    const coinUrl = `${process.env.PUBLIC_URL}/data/coin.json`;

    getData(coinUrl, setCoinData);
  }, []);

  return (
    <CoinDataContext.Provider value={coinDataState}>
      {children}
    </CoinDataContext.Provider>
  );
}

export default CoinDataProvider;
