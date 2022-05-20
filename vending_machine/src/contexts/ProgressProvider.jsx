import React, { useMemo, useReducer } from 'react';
import { changeKoreanLocalMoney } from 'utility/changeValue';

export const progressContext = React.createContext();

const reducer = (state, { type, data }) => {
  let newState = [];

  switch (type) {
    case 'ADD_MONEY':
      newState = [...state, `${data}원 투입`];
      break;
    case 'RETURN_MONEY':
      newState = [...state, `${data}원 반환`];
      break;
    case 'SELECT_DRINK':
      newState = [...state, `${data} 선택`];
      break;

    default:
      return state;
  }

  return newState;
};

function ProgressProvider({ children }) {
  const [progressBox, dispatch] = useReducer(reducer, []);

  const addMoneyMessage = (inputMoney) => {
    dispatch({
      type: 'ADD_MONEY',
      data: changeKoreanLocalMoney(inputMoney),
    });
  };

  const returnMoneyMessage = (money) => {
    dispatch({
      type: 'RETURN_MONEY',
      data: changeKoreanLocalMoney(money),
    });
  };

  const selectedDrinkMessage = (drinkName) => {
    dispatch({
      type: 'SELECT_DRINK',
      data: drinkName,
    });
  };

  const progressContextValue = useMemo(() => {
    return {
      progressBox,
      addMoneyMessage,
      returnMoneyMessage,
      selectedDrinkMessage,
    };
  }, [progressBox]);

  return (
    <progressContext.Provider value={progressContextValue}>
      {children}
    </progressContext.Provider>
  );
}

export default ProgressProvider;
