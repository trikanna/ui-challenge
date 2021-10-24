import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  nav {
    border-bottom: 1px solid var(--text-gray-3);

    a {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      padding: 0 17px;
      text-decoration: none;
      border-bottom: 3px solid transparent;
      font-weight: 700;
      font-size: 14px;
      transition: border-color 0.2s ease-in, color 0.3s ease-in;
      color: var(--text-gray-6);

      &:hover {
        border-color: var(--text-gray-2);
        color: var(--text-gray-8);
      }

      &.selected {
        user-select: none;
        cursor: default;
        pointer-events: none;
        color: var(--text-purple);
        border-color: var(--text-purple);
      }
    }
  }
`;

const Tabs: React.FC = () => {
  return (
    <Wrapper>
      <nav>
        <a href="#all" className="selected">
          All Results
        </a>
        <a href="#failed">Error</a>
        <a href="#failed">Failed</a>
        <a href="#passed">Passed</a>
      </nav>
    </Wrapper>
  );
};

export default Tabs;
