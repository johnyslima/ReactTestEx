import mirrorCreator from 'mirror-creator'

const actionTypes = mirrorCreator([
  'FETCH_COMPANIES_REQUEST',
  'FETCH_COMPANIES_SUCCESS',
  'FETCH_COMPANY',
  'FETCH_COMPANY_SUCCESS',
  'UPDATE_COMPANY',
  'UPDATE_COMPANY_SUCCESS',
]);
export default actionTypes;