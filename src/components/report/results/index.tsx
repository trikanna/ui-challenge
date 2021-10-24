import React from 'react';

import { ResultsContainer } from '../../shared';

import { Collapsable, Search, Tabs } from '../results/components/index';
import { TYPE } from '../../../types';

const Results: React.FC = () => {
  // @ts-ignore
  const data = JSON.parse(localStorage.getItem('sc_reports_by_id'));

  return (
    <ResultsContainer>
      <Tabs />
      <Search />

      <Collapsable
        type={TYPE.ERROR}
        data={data.endpoints.filter((el: any) => el.status === 'ERROR')}
        total={data.endpoints.length}
        isExpanded={false}
      />

      <Collapsable
        type={TYPE.FAILED}
        data={data.endpoints.filter((el: any) => el.status === 'FAILURE')}
        total={data.endpoints.length}
      />

      <Collapsable
        type={TYPE.PASSED}
        data={data.endpoints.filter((el: any) => el.status === 'SUCCESS')}
        total={data.endpoints.length}
      />
    </ResultsContainer>
  );
};

export default Results;
