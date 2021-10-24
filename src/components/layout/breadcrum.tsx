import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { StackIcon } from '@primer/octicons-react';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  background: var(--text-white);
  overflow: hidden;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid var(--text-gray-3);

  ul  {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: space-between;

    li {
      align-self: center;
      margin-right: 8px;
      font-size: 13px;

      &:nth-child(2) {
        a {
          color: var(--text-purple);
          text-decoration: none;
          font-weight: 700;
        }
      }

      &:after {
        content: '>';
        margin-left: 8px;
      }

      &:first-child {
        width: 40px;
        height: 40px;
        line-height: 39px;
        border-right: 1px dotted var(--text-gray-4);
        margin-right: 8px;
        text-align: center;

        svg {
          opacity: 0.5;
        }

        &:after {
          content: none;
        }
      }

      &:last-child {
        a {
          text-decoration: none;
          display: inline-block;
          font-size: 12px;
          background: var(--text-red); /* red or green background: --text-green */
          color: var(--text-white);
          border-radius: 16px;
          padding: 0px 8px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          position: relative;
          text-indent: 14px;

          span {
            width: 13px;
            height: 13px;
            font-size: 9px;
            text-indent: initial;
            font-weight: 700;
            line-height: 14px;
            position: absolute;
            top: 4px;
            left: 4px;
            display: inline-block;
            text-align: center;
            color: var(--text-red);
            background: var(--text-white);
            border-radius: 50%;
            margin-right: 4px;
          }
        }

        &:after {
          content: none;
        }
      }
    }
  }
`;

const Breadcrum: React.FC = () => {
  const { orgId, reportId } = useParams<{ orgId: string; reportId: string }>();

  return (
    <Wrapper>
      <ul>
        <li>
          <StackIcon />
        </li>
        <li>
          <Link to={`/organizations/${orgId}/reports`} replace>
            Test Reports
          </Link>
        </li>
        <li>Execution #{reportId}</li>

        <li>
          <a href="#">
            <span>x</span>FAILED
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Breadcrum;
