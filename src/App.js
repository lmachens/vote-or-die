import React from 'react';
import AppHeader from './components/AppHeader';
import Add from './pages/Add';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Vote from './pages/Vote';
import Result from './pages/Result';
import styled from '@emotion/styled';
import GlobalStyles from './components/GlobalStyles';

const Main = styled.main`
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  min-height: 300px;
  align-items: center;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppHeader />
      <Main>
        <Switch>
          <Route exact path="/">
            <Add />
          </Route>
          <Route path="/polls/:pollId/vote">
            <Vote />
          </Route>
          <Route path="/polls/:pollId">
            <Result />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
