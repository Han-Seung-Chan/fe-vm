import { useContext } from 'react';
import styled from 'styled-components';

import { color, fontSize } from 'style/variables';
import Button from './common/Button';
import { progressContext } from 'contexts/ProgressProvider';

function ReturnBtn({ totalMoney, setTotalMoney }) {
  const { returnMoneyMessage } = useContext(progressContext);

  const returnTotalMoney = () => {
    if (totalMoney <= 0) return;

    returnMoneyMessage(totalMoney);
    setTotalMoney(0);
  };

  return (
    <StyledBtn content="반환" disabled={false} onClick={returnTotalMoney} />
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
