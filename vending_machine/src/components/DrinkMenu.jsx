import { useContext, useEffect, useState } from 'react';

import DrinkItem from './DrinkItem';
import { getData } from 'utility/fetch';
import { minusQuantity } from 'utility/fixData';
import { TotalMoneyContext } from 'contexts/TotalMoneyProvider';
import { progressContext } from 'contexts/ProgressProvider';

function DrinkMenu() {
  const [drinkData, setDrinkData] = useState([]);
  const { selectedDrinkMessage } = useContext(progressContext);
  const [totalMoney, setTotalMoney] = useContext(TotalMoneyContext);

  useEffect(() => {
    const drinkUrl = `${process.env.PUBLIC_URL}/data/drink.json`;

    getData(drinkUrl, setDrinkData);
  }, []);

  const selectDrink = (id) => () => {
    const selectedItem = drinkData.find((data) => data.id === id);
    if (totalMoney < selectedItem.price || !selectedItem.quantity) return;
    selectedDrinkMessage(selectedItem.name);
    setTotalMoney(totalMoney - selectedItem.price);
    minusQuantity(drinkData, setDrinkData, selectedItem);
  };

  return (
    <>
      {drinkData.map(({ id, price, quantity, name }) => {
        const drinkInfo = {
          id,
          price,
          quantity,
          name,
          soldOut: !quantity,
          totalMoney: totalMoney,
          onClick: selectDrink,
        };

        return <DrinkItem key={id} drinkInfo={drinkInfo} />;
      })}
    </>
  );
}

export default DrinkMenu;
