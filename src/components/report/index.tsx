import React from 'react';
import { IssueReopenedIcon, CheckCircleFillIcon, XCircleFillIcon } from '@primer/octicons-react';
import { Link, useParams } from 'react-router-dom';

import { ReportListItem } from '../shared';
import { IReportItemProps } from '../../types';

const iconSize = {
  size: 16
};

const ReportItem: React.FC<IReportItemProps> = ({ id }) => {
  const { orgId } = useParams<{ orgId: string }>();

  return (
    <ReportListItem className="animate__animated animate__fast animate__fadeInDown">
      <IssueReopenedIcon
        className="animate__animated animate__slower animate__rotateIn"
        {...iconSize}
        fill="#adb5bd"
      />
      <section>
        <h4>
          <Link to={`/organizations/${orgId}/reports/${id}`}>Execution #{id}</Link>
        </h4>
        <h5>2 min ago - 10m long</h5>
      </section>

      <section className="animate__animated animate__slow animate__fadeIn">
        <span>
          <CheckCircleFillIcon {...iconSize} fill="#36b37e" />
          <strong>10</strong> passed
        </span>
        <span>
          <XCircleFillIcon {...iconSize} fill="#ff5630" />
          <strong>3</strong> failed
        </span>
      </section>
    </ReportListItem>
  );
};

export default ReportItem;
