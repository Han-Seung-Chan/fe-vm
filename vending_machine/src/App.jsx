import styled from 'styled-components';

import Main from 'components/Main';
import Header from 'components/Header';
import TotalMoneyProvider from 'contexts/TotalMoneyProvider';
import ProgressProvider from 'contexts/ProgressProvider';
import CoinDataProvider from 'contexts/CoinDataProvider';

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
