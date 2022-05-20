import React, { useMemo, useState } from 'react';

export const TotalMoneyContext = React.createContext();

function TotalMoneyProvider({ children }) {
  const [totalMoney, setTotalMoney] = useState(0);

  const totalMoneyState = useMemo(
    () => [totalMoney, setTotalMoney],
    [totalMoney]
  );
  return (
    <TotalMoneyContext.Provider value={totalMoneyState}>
      {children}
    </TotalMoneyContext.Provider>
  );
}

export default TotalMoneyProvider;
