import { FeatureConfig } from '../types';

/**
 * featureAccessConfig defines the access configuration for various features
 * based on user roles and subscription types.
 * 
 * - Features:
 *   - AppConfiguration: Controls access to app configuration settings.
 *   - BetaTesting: Controls access to beta testing features.
 * 
 * - Roles:
 *   - user: Represents the standard user with different subscription tiers (premium, basic).
 *   - admin: Represents the admin role with different subscription tiers (premium, basic).
 * 
 * - Access Levels:
 *   - premium: Indicates access for premium users/admins.
 *   - basic: Indicates access for basic users/admins.
 */
export const featureAccessConfig: FeatureConfig = {
    AppConfiguration: {
      user: { premium: true, basic: false },
      admin: { premium: true, basic: true }
    },
    BetaTesting: {
      user: { premium: true, basic: false },
      admin: { premium: true, basic: true }
    }
};
