import { useContext, useRef } from 'react';
import styled from 'styled-components';

import { color, fontSize } from 'style/variables';
import {
  changeKoreanLocalMoney,
  changeStrMoneyToNumMoney,
} from 'utility/changeValue';
import { progressContext } from 'contexts/ProgressProvider';

function InputForm({ totalMoney, setTotalMoney }) {
  const inputTag = useRef();

  const { addMoneyMessage } = useContext(progressContext);

  const changeValue = () => {
    const onlyNumber = +inputTag.current.value.replace(/[^0-9]/g, '');
    inputTag.current.value = changeKoreanLocalMoney(onlyNumber);
  };

  const changeTotalMoney = (e) => {
    if (e.key !== 'Enter') return;

    let inputValue = +changeStrMoneyToNumMoney(inputTag.current.value);

    inputValue = inputValue % 10 ? Math.ceil(inputValue / 10) * 10 : inputValue;

    setTotalMoney(totalMoney + inputValue);
    addMoneyMessage(inputValue);
    inputTag.current.value = '';
  };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder="0"
        ref={inputTag}
        onKeyPress={changeTotalMoney}
        onChange={changeValue}
      />
      <StyledSpan>원</StyledSpan>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  margin: 0 auto;
  width: 270px;
  height: 60px;
  margin-top: 20px;
  border: 2px solid ${color.gray};
`;

const StyledInput = styled.input`
  width: 230px;
  height: inherit;
  font-size: ${fontSize.xl};
  border: none;
  text-align: right;
  background-color: inherit;

  :focus {
    outline: none;
  }
`;

const StyledSpan = styled.span`
  font-size: ${fontSize.xl};
`;

export default InputForm;
