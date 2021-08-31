import React from 'react';
import GithubCard from './components/GithubCard';
import './App.css';

import styled from 'styled-components';

const StyledApp = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function App() {
  return (
    <StyledApp className="App">
      <GithubCard />
    </StyledApp>
  );
}

export default App;
