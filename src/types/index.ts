export type Owner = {
  email: string;
  name: string;
  picture: string;
};

export enum TYPE {
  ERROR,
  FAILED,
  PASSED
}

export interface IResultItemProps {
  type?: TYPE;
  isExpanded?: boolean;
  data?: any;
  total?: string;
}

export interface IOrganizationOwner {
  email: string;
  name: string;
  picture: string;
}

export interface IOrganization {
  id: number;
  name: string;
  owner: IOrganizationOwner;
}

export interface IReportItemProps {
  id: string;
}
