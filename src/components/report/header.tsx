import React from 'react';
import TimeAgo from 'timeago-react';

import {
  ClockIcon,
  CalendarIcon,
  PackageIcon,
  GitBranchIcon,
  CommitIcon,
  MarkGithubIcon,
  GlobeIcon
} from '@primer/octicons-react';

import { ReportHeaderItem, RotatedIcon } from '../shared';

import { millisToMinutesAndSeconds } from '../../utils';

const iconProps = {
  size: 16,
  fill: '#495057'
};

const ReportHeader: React.FC = () => {
  // @ts-ignore
  const data = JSON.parse(localStorage.getItem('sc_reports_by_id'));

  console.log('header.data', data);

  return (
    <ReportHeaderItem>
      <section>
        <div>
          <ClockIcon {...iconProps} />
          <span>Duration: {millisToMinutesAndSeconds(data.duration)}</span>

          <CalendarIcon {...iconProps} />
          <span>
            Finished: <TimeAgo datetime={data.end_date} />
          </span>
        </div>

        <div>
          <PackageIcon {...iconProps} />
          <span>
            <a href="https://app-staging.levo.ai/api" target="_blank" rel="noreferrer noopener">
              {data.job_name} ({data.duration})
            </a>
          </span>
        </div>

        <div>
          <RotatedIcon>
            <GitBranchIcon {...iconProps} />
          </RotatedIcon>
          <span>{data.branch.toLowerCase().replaceAll(' ', '_')}</span>

          <RotatedIcon>
            <CommitIcon {...iconProps} />
          </RotatedIcon>
          <span>{data.commit}</span>

          <MarkGithubIcon {...iconProps} />
          <span>
            <a
              href={`https://github.com/${data.github_user}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {data.github_user}
            </a>
          </span>
        </div>

        <div>
          <GlobeIcon {...iconProps} />
          <span>
            <a href={data.environment_url} target="_blank" rel="noreferrer noopener">
              {data.environment_url}
            </a>
          </span>
        </div>
      </section>
    </ReportHeaderItem>
  );
};

export default ReportHeader;
