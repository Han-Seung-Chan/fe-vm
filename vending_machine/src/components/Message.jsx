import { useContext } from 'react';
import styled from 'styled-components';

import { color, fontSize } from 'style/variables';

import History from './History';
import { progressContext } from 'contexts/ProgressProvider';

function Message() {
  const { progressBox } = useContext(progressContext);

  return (
    <StyledMessage>
      <MessageTitle>message</MessageTitle>
      <ul>
        <History progressBox={progressBox} />
      </ul>
    </StyledMessage>
  );
}

const StyledMessage = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 270px;
  height: 520px;
  border: 2px solid ${color.gray};
  overflow-y: scroll;
`;

const MessageTitle = styled.span`
  font-size: ${fontSize.xl};
`;

export default Message;
