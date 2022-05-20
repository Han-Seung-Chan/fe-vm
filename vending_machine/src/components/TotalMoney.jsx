import styled from 'styled-components';

import { changeKoreanLocalMoney } from 'utility/changeValue';
import { color, fontSize } from 'style/variables';

function TotalMoney({ totalMoney }) {
  return <StyledTotal>{changeKoreanLocalMoney(totalMoney)}원</StyledTotal>;
}

const StyledTotal = styled.span`
  display: inline-block;
  margin-top: 20px;
  width: 270px;
  border: 2px solid ${color.gray};
  padding: 20px 0;
  font-size: ${fontSize.xl};
`;

export default TotalMoney;
