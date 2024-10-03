// src/controllers/DisplayController.tsx

import React, { useEffect, useState } from 'react';
import { getAllowedFeatures } from '../handlers/featureHandler';
import { useGlobalState } from '../providers/GlobalContext';

/**
 * DisplayController component is responsible for determining which features 
 * are allowed for the authenticated user based on their role and package type.
 * 
 * It dispatches the list of allowed features into the global state when the user is authenticated.
 */
const DisplayController: React.FC = () => {
  const { state, dispatch } = useGlobalState(); // Destructuring state and dispatch from global context
  const { isAuthenticated, role, packageType } = state;   // Extracting authentication status, user role, and package type from global state

  useEffect(() => {
    // Run this effect when authentication status, role, or package type changes
    if (!isAuthenticated) return;

    // Fetch allowed features based on the user's role and package
    const allowedFeatures = getAllowedFeatures(packageType, role);
    
    // Dispatch the allowed features to update the global state
    dispatch({ type: 'SET_FEATURES', payload: allowedFeatures });
  }, [isAuthenticated, role, packageType]);

  if (!isAuthenticated) {
    return null;
  }

  return null;
};

export default DisplayController;
