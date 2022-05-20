import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Wallet from 'pages/Wallet';

function Main() {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  margin-top: 20px;
`;

export default Main;
