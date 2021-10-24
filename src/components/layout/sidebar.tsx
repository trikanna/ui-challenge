import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { LogoWrapper, UserInfoWrapper, MenuWrapper, LogoutWrapper } from '../shared';

const Wrapper = styled.div`
  background: var(--text-gray-8);
  overflow: hidden;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </LogoWrapper>

      <UserInfoWrapper>
        <img
          src="https://pbs.twimg.com/profile_images/1125062806133460993/ouEFDg7D_400x400.png"
          alt=""
        />

        <div>
          <h5 title="Layne Sebert">Layne Sebert</h5>

          <p>
            <a href="mailto:lsebert0@wix.com">lsebert0@wix.com</a>
          </p>
        </div>
      </UserInfoWrapper>

      <MenuWrapper>
        <ul>
          <li>
            <Link to="/">Organizations</Link>
          </li>
          {/*

          <li>
            <Link to="/reports">Reports</Link>
          </li>

          <li>
            <Link to="/detail">Details</Link>
          </li>

          */}
        </ul>
      </MenuWrapper>

      <LogoutWrapper>logout</LogoutWrapper>
    </Wrapper>
  );
};

export default Sidebar;
