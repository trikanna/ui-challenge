import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { OrganizationIcon, DatabaseIcon } from '@primer/octicons-react';

import { useHistory } from 'react-router-dom';

import { getOrganizations } from '../../data/services';
import { IOrganization } from '../../types/index';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-item: center;
`;

const OrganizationItem = styled.div`
  background-image: linear-gradient(to bottom right, #5091f1, #6554c0bf);
  cursor: pointer;
  border-radius: 18px;
  margin-right: 20px;
  width: 150px;
  height: 150px;
  padding: 8px;
  color: white;
  opacity: 1;
  transition: opacity 0.18s ease-in;

  h4 {
    margin-top: 8px;
    margin-left: 1px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const LoadingOrganizationItem = styled.div`
  background-image: linear-gradient(to bottom right, #f8f9fa, #ced4da);

  border-radius: 18px;
  margin-right: 20px;
  width: 150px;
  height: 150px;
  padding: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrganizationLogo = styled.div`
  background: rgba(255, 255, 255, 0.09);
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrganizationName = styled.h3`
  margin: 5px 0 28px 1px;
  letter-spacing: -0.03em;
`;

const Owner = styled.div`
  margin-left: 1px;

  h4,
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    margin: 0;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: -0.03em;
  }

  p {
    font-size: 12px;
    font-weight: 400;
  }
`;

const Organizations: React.FC = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [orgs, setOrganizations] = useState<any[]>([
    {
      id: 1,
      name: 'Levo.ai',
      owner_email: 'trikanna@gmail.com',
      owner_name: 'Santiago Camelo',
      owner_picture: 'https://pbs.twimg.com/profile_images/1125062806133460993/ouEFDg7D_400x400.png'
    },
    {
      id: 2,
      name: 'Mecerre',
      owner_email: 'marcelo@mecerre.com',
      owner_name: 'Marcelo Rosano Posadas',
      owner_picture: 'https://pbs.twimg.com/profile_images/1125062806133460993/ouEFDg7D_400x400.png'
    }
  ]);

  useEffect(() => {
    const cache = localStorage.getItem('sc_organizations');

    if (!cache) {
      getOrganizations().then((data) => {
        console.log('data', data);
        setOrganizations(data);

        localStorage.setItem('sc_organizations', data);

        setLoading(false);
      });
    }

    return () => {};
  }, []);

  const handleOrganizationClick = (org: IOrganization) => {
    console.log('click', org);

    history.push(`/organizations/${org.id}/reports`);
  };

  return (
    <div>
      <div style={{ textAlign: 'left', margin: '14px 0 100px 0' }}>
        <h1>Organizations</h1>
        <h3>Pick the Organization you want to access to</h3>
      </div>

      <Wrapper>
        {!loading ? (
          orgs.length > 0 &&
          orgs.map((organization) => {
            const org: IOrganization = {
              id: organization.id,
              name: organization.name,
              owner: {
                email: organization.owner_email,
                name: organization.owner_name,
                picture: organization.owner_picture
              }
            };

            return (
              <OrganizationItem
                className="animate__animated animate__fadeIn"
                key={org.id}
                onClick={() => handleOrganizationClick(org)}
              >
                <OrganizationLogo className="animate__animated animate__slow animate__fadeInLeft">
                  <OrganizationIcon size={32} />
                </OrganizationLogo>

                <OrganizationName className="animate__animated animate__slower_ animate__fadeInUp">
                  {org.name}
                </OrganizationName>

                <Owner className="animate__animated animate__slow animate__fadeInUp">
                  <h4>{org.owner.name}</h4>
                  <p>{org.owner.email}</p>
                </Owner>
              </OrganizationItem>
            );
          })
        ) : (
          <LoadingOrganizationItem>
            <DatabaseIcon size={18} fill="#adb5bd" />
          </LoadingOrganizationItem>
        )}
      </Wrapper>
    </div>
  );
};

export default Organizations;
