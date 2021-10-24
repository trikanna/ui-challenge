import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckCircleFillIcon,
  XCircleFillIcon,
  AlertIcon
} from '@primer/octicons-react';

import { TYPE, IResultItemProps } from '../../../../types';

import { millisToMinutesAndSeconds } from '../../../../utils';

enum COLORS {
  ERROR = '#ffb946',
  FAILED = '#ff5630',
  PASSED = '#36b37e'
}

const Wrapper = styled.div`
  padding: 16px;
  border-bottom: 1px dotted var(--text-gray-3);

  &:last-child {
    border-bottom: none;
  }
`;

export const ResultsWrapper = styled.section`
  transform: translate(9999px);
  opacity: 0;
  height: 0;

  &.expanded {
    transition: opacity 0.5s ease-in;
    transform: translate(0);
    opacity: 1;
    height: auto;
    padding-top: 16px;
  }
`;

export const ResultItem = styled.div<IResultItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: ${({ type }) =>
    type === TYPE.FAILED
      ? `3px solid ${COLORS.FAILED}`
      : type === TYPE.ERROR
      ? `3px solid ${COLORS.ERROR}`
      : `3px solid ${COLORS.PASSED}`};
  margin-bottom: 16px;
  background: #f2f2f2;
  padding: 8px 16px 8px 12px;
  border-radius: 0 3px 3px 0;

  &:last-child  {
    margin-bottom: 0;
  }

  h5,
  span {
    font-size: 13px;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    word-wrap: normal;
    white-space: pre;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: initial;
    -moz-osx-font-smoothing: initial;
  }

  h5 {
    margin: 0;
  }

  span {
    color: var(--text-gray-5);
  }
`;

const CollapsableHeader = styled.div<IResultItemProps>`
  display: flex;
  align-items: center;

  div {
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1) {
      cursor: pointer;
      transition: opacity 0.18s ease-in;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }

    &:nth-child(1),
    &:nth-child(2) {
      width: 20px;
      height: 20px;
      user-select: none;
    }

    h4 {
      margin: 0;
      color: var(--text-gray-7);
    }
  }
`;

const Collapsable: React.FC<IResultItemProps> = ({ type, isExpanded = true, data, total }) => {
  const [expanded, setExpanded] = useState(isExpanded);

  const toggleExpandedState = (): void => setExpanded(!expanded);

  return (
    <Wrapper>
      <CollapsableHeader isExpanded={expanded}>
        <div onClick={toggleExpandedState}>
          {expanded ? <ChevronDownIcon size={20} /> : <ChevronUpIcon size={20} />}
        </div>
        <div>
          {type === TYPE.FAILED ? (
            <XCircleFillIcon size={16} fill={COLORS.FAILED} />
          ) : type === TYPE.ERROR ? (
            <AlertIcon size={16} fill={COLORS.ERROR} />
          ) : (
            <CheckCircleFillIcon size={16} fill={COLORS.PASSED} />
          )}
        </div>
        <div>
          <h4>
            {type === TYPE.FAILED ? 'Failed' : type === TYPE.ERROR ? 'Error' : 'Passed'} Tests (
            {data.length} /{total})
          </h4>
        </div>
      </CollapsableHeader>

      <ResultsWrapper className={expanded ? 'expanded' : ''}>
        {data.map((entry: any) => (
          <ResultItem key={entry.url} type={type}>
            <h5>{entry.url}</h5>
            <span>{millisToMinutesAndSeconds(entry.duration)}</span>
          </ResultItem>
        ))}
      </ResultsWrapper>
    </Wrapper>
  );
};

export default Collapsable;
