import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Organizations from '../organizations';

import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import Breadcrum from '../layout/breadcrum';
import Content from '../layout/content';

import ReportItem from '../report';
import ReportHeader from '../report/header';
import Results from '../report/results';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: row;
  position: relative;
`;

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  background: var(--text-gray-2);
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Router>
        <Sidebar />

        <VerticalWrapper>
          <Switch>
            {/* sidebar */}

            <Route exact path="/">
              <Content>
                <Organizations />
              </Content>
            </Route>

            {/* see reports list */}
            <Route exact path="/organizations/:orgId/reports">
              <Header />
              <Breadcrum />

              <Content>
                <ReportItem id="1" />
                <ReportItem id="2" />
                <ReportItem id="4" />
              </Content>
            </Route>

            {/* view report detail */}
            <Route exact path="/organizations/:orgId/reports/:reportId">
              <Header />
              <Breadcrum />

              <Content>
                <ReportHeader />
                <Results />
              </Content>
            </Route>
          </Switch>
        </VerticalWrapper>
      </Router>
    </Wrapper>
  );
};

export default App;
