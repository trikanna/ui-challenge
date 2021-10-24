import axios from 'axios';

const API_PREFIX = 'https://my.api.mockaroo.com/';
const API_KEY = '?key=2e435a20';

export const getOrganizations = async () => {
  const { data } = await axios.get(`${API_PREFIX}/organizations.json${API_KEY}`);

  return data;
};
