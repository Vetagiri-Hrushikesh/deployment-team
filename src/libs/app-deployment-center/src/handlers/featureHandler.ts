// src/handlers/getAllowedFeatures.ts
import { FeatureKey, PackageType, RoleType } from '../types';
import { featureAccessConfig } from '../config/featureAccessConfig';
/**
 * getAllowedFeatures function determines which features are available to a user 
 * based on their package type (e.g., premium, basic) and role (e.g., user, admin).
 * 
 * @param packageType - The type of package the user has (premium or basic).
 * @param role - The role of the user (user or admin).
 * @returns An array of FeatureKeys representing the features the user is allowed to access.
 */
export const getAllowedFeatures = (packageType: PackageType, role: RoleType): FeatureKey[] => {
  const keys = Object.keys(featureAccessConfig) as FeatureKey[];
  return keys.filter((feature) => {
    const accessConfig = featureAccessConfig[feature];
    // Return true if the feature is allowed for the given role and package type
    return accessConfig && accessConfig[role][packageType];
  });
};
