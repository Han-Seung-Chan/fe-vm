import { useContext } from 'react';

import { TotalMoneyContext } from 'contexts/TotalMoneyProvider';
import InputForm from './InputForm';
import Message from './Message';
import ReturnBtn from './ReturnBtn';
import TotalMoney from './TotalMoney';

function Order() {
  const [totalMoney, setTotalMoney] = useContext(TotalMoneyContext);

  return (
    <>
      <TotalMoney totalMoney={totalMoney} />
      <InputForm totalMoney={totalMoney} setTotalMoney={setTotalMoney} />
      <ReturnBtn totalMoney={totalMoney} setTotalMoney={setTotalMoney} />
      <Message />
    </>
  );
}

export default Order;
