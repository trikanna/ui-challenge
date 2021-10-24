import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px 16px 0 16px;

  input {
    width: calc(100% - 28px);
    border: 2px solid var(--text-gray-4);
    border-radius: 3px;
    padding: 8px 12px;
    outline: none;
    transition: box-shadow 0.18s ease-in;

    &:hover {
      box-shadow: 0px 0px 3px 3px #6554c021;
    }

    &:focus {
      box-shadow: 0px 0px 3px 3px #6554c047;
    }
  }
`;

const Search: React.FC = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Filter by endpoint..." />
    </Wrapper>
  );
};

export default Search;
