import styled from 'styled-components';

export const LogoWrapper = styled.div`
  background: var(--text-gray-8);
  height: 60px;
  padding: 0 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid var(--text-gray-9);

  a {
    height: 26px;
  }

  img {
    height: 26px;
  }
`;

export const UserInfoWrapper = styled.div`
  background: var(--text-gray-8);
  padding: 16px;
  color: var(--text-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--text-gray-9);
  margin-bottom: 18px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 9px;
    border-radius: 50%;
    margin-left: -1px;
  }

  h5,
  p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
    flex-direction: column;
  }

  h5 {
    font-weight: 700;
    font-size: 16px;
    margin: -2px 0 0 0;
  }

  p {
    margin: 0;
    font-size: 12px;
    text-rendering: geometricPrecision;

    a {
      text-decoration: none;
      color: var(--text-light-opacity-7);

      &:hover {
        text-decoration: underline;
        color: var(--text-yellow);
      }
    }
  }
`;

export const MenuWrapper = styled.div`
  background: var(--text-gray-8);
  height: calc(100% - 154px);

  /* not sure about inner scrollable area for menu items
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  */

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li  {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      margin: 0;
      padding: 0;
      overflow: hidden;

      a {
        padding-left: 16px;
        display: flex;
        flex: 1;
        _background: yellow;
        color: var(--text-orange);
        text-decoration: none;
        font-weight: 700;
        margin: 0;

        &:hover {
          _text-decoration: underline;
          background: #ff8b001f;
        }
      }
    }
  }
`;

export const LogoutWrapper = styled.div`
  background: pink;
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(200px - 16px);
  padding-left: 16px;
`;

export const ReportListItem = styled.div`
  background: var(--text-white);
  border-radius: 4px;
  padding: 12px 16px 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  svg {
    align-self: flex-start;
    margin: 3px 12px 0 0;
  }

  section {
    flex: 2;

    &:last-child {
      text-align: right;
      flex-direction: row;
      flex: 1;
    }

    h4 {
      margin-bottom: 0;
      color: var(--text-gray-7);

      a {
        color: var(--text-purple);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    h5 {
      margin-bottom: 0;
      font-size: 13px;
      color: var(--text-gray-6);
      letter-spacing: initial;
      user-select: none;
    }

    span {
      font-size: 14px;
      margin-left: 16px;
      color: var(--text-red);
      user-select: none;

      &:first-child {
        color: var(--text-green);

        &:after {
          content: '|';
          color: var(--text-gray-3);
          margin-left: 16px;
        }
      }
    }
  }
`;

export const RotatedIcon = styled.em`
  svg {
    transform: rotate(90deg);
  }
`;

export const ReportHeaderItem = styled.div`
  background: var(--text-white);
  border-radius: 4px;
  padding: 13px 64px 16px 16px;
  display: inline-block;
  margin-bottom: 16px;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.06);

  div {
    font-size: 13px;
    line-height: 24px;
    position: relative;

    span {
      margin-right: 24px;
      font-weight: 700;
      text-rendering: optimizeLegibility;
      user-select: none;

      a {
        text-decoration: none;
        color: var(--text-purple);
        user-select: initial;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    svg {
      user-select: none;
      position: relative;
      top: -0.5px;
      left: 0;
      margin-right: 8px;
      opacity: 0.5;
    }
  }
`;

export const ResultsContainer = styled.div`
  background: var(--text-white);
  border-radius: 3px;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.06);
`;
