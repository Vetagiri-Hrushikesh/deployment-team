// actionTypes.ts


// Action type to set the authentication status (true/false).
export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';

// Action type to set the user's package type ('basic' or 'premium'
export const SET_USER_PACKAGE_TYPE = 'SET_USER_PACKAGE_TYPE';

// Action type to set the user's role ('user' or 'admin').
export const SET_USER_ROLE = 'SET_USER_ROLE';

// Action type to set the available features for the user (an array of feature keys).
export const SET_FEATURES = 'SET_FEATURES';

// Action type to set the currently selected feature (either a feature key or null).
export const SET_SELECTED_FEATURE = 'SET_SELECTED_FEATURE'