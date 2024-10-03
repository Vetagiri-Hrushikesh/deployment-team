// src/controllers/DisplayController.tsx

import React, { useEffect, useState } from 'react';
import { getAllowedFeatures } from '../handlers/featureHandler';
import { useGlobalState } from '../providers/GlobalContext';

const DisplayController: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const { isAuthenticated, role, packageType } = state;

  useEffect(() => {
    if (!isAuthenticated) return;

    const allowedFeatures = getAllowedFeatures(packageType, role);

    dispatch({ type: 'SET_FEATURES', payload: allowedFeatures });
  }, [isAuthenticated, role, packageType]);

  if (!isAuthenticated) {
    return null;
  }

  return null;
};

export default DisplayController;
