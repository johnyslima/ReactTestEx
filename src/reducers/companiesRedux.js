import actionTypes from '../constants'

const initialState = {
  companies: null,
  company: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_COMPANIES_REQUEST:
      return { ...state, company: null, };
    case actionTypes.FETCH_COMPANIES_SUCCESS:
      return { ...state, company: null, companies: action.companies };
    case actionTypes.FETCH_COMPANY:
      return { ...state, company: null};
    case actionTypes.FETCH_COMPANY_SUCCESS:
      return { ...state, company: action.company}
    case actionTypes.UPDATE_COMPANY:
      return state
    case actionTypes.UPDATE_COMPANY_SUCCESS:
      return { ...state, company: action.company }
    default:
      return state;
  }
}