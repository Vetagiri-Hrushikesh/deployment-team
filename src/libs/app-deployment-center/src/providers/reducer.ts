import { GlobalState, GlobalAction } from '../types';
import * as actionTypes from '../utils/actionTypes';

// Defines the initial state for the global state context.
export const defaultState: GlobalState = {
    isAuthenticated: false,   // Default to false, indicating the user is not logged in.
    packageType: 'basic',     // Default package type is 'basic'.
    role: 'user',             // Default role is 'user'.
    features: [],             // No features available by default.
    selectedFeature: null,    // No feature selected by default
  };
  
/**
 * globalReducer
 * 
 * This is the reducer function that handles state updates based on the dispatched actions. 
 * It listens for different action types and updates the state accordingly.
 * 
 * @param {GlobalState} state - The current state of the global context.
 * @param {GlobalAction} action - The action that triggers the state update, including the action type and payload.
 * @returns {GlobalState} - The updated state based on the action type and payload.
 */
export const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATION:
      // Action to update the authentication status.
      return { ...state, isAuthenticated: action.payload };
    case actionTypes.SET_USER_PACKAGE_TYPE:
      // Action to update the package type (e.g., 'basic' or 'premium').
      return { ...state, packageType: action.payload };
    case actionTypes.SET_USER_ROLE:
      // Action to update the user role (e.g., 'user' or 'admin').
      return { ...state, role: action.payload };
    case actionTypes.SET_FEATURES:
      // Action to set the list of available features for the user.
      return { ...state, features: action.payload };
    case actionTypes.SET_SELECTED_FEATURE:
       // Action to set the currently selected feature.
      return { ...state, selectedFeature: action.payload };
    default:
      // Default case, returning the current state if the action type doesn't match any cases.
      return state;
  }
};
