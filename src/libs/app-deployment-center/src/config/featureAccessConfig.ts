import { FeatureConfig } from '../types';

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
