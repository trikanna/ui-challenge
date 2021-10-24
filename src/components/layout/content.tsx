import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--text-gray-2);
  width: calc(100% - 56px);
  height: calc(100% - 134px);
  padding: 16px 16px 16px 0;
  margin-left: 40px;

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Content: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;
