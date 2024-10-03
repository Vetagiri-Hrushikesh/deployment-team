import { GlobalState, GlobalAction } from '../types';
import * as actionTypes from '../utils/actionTypes';

export const defaultState: GlobalState = {
    isAuthenticated: false,
    packageType: 'basic',
    role: 'user',
    features: [],
    selectedFeature: null,
  };
  

export const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATION:
      return { ...state, isAuthenticated: action.payload };
    case actionTypes.SET_USER_PACKAGE_TYPE:
      return { ...state, packageType: action.payload };
    case actionTypes.SET_USER_ROLE:
      return { ...state, role: action.payload };
    case actionTypes.SET_FEATURES:
      return { ...state, features: action.payload };
    case actionTypes.SET_SELECTED_FEATURE:
      return { ...state, selectedFeature: action.payload };
    default:
      return state;
  }
};
