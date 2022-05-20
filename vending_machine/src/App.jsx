import styled from 'styled-components';

import Header from 'components/Header';
import Main from 'components/Main';
import TotalMoneyProvider from 'context/TotalMoneyProvider';
import ProgressProvider from 'context/ProgressProvider';
import CoinDataProvider from 'context/CoinDataProvider';

function App() {
  return (
    <StyledApp>
      <Header />
      <TotalMoneyProvider>
        <ProgressProvider>
          <CoinDataProvider>
            <Main />
          </CoinDataProvider>
        </ProgressProvider>
      </TotalMoneyProvider>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

export default App;
