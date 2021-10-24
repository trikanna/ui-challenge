import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  background: var(--text-white);
  overflow: hidden;
  height: 60px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid var(--text-gray-3);

  h3 {
    margin-bottom: 0;
    margin-left: 48px;
  }
`;

const Header: React.FC = () => {
  const location = useLocation();
  const title = useRef('');

  // console.log('location', location);

  useEffect(() => {
    if (location.pathname === '/') {
      title.current = 'Organizations';

      console.log('si');
    }

    return () => {};
  });

  return (
    <Wrapper>
      <h3>{title.current}</h3>
    </Wrapper>
  );
};

export default Header;
