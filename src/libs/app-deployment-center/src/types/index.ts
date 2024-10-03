// src/types/index.ts

// Enumerates available package types within the application.
export type PackageType = 'basic' | 'premium';

// Enumerates available roles for users within the application.
export type RoleType = 'user' | 'admin';

// Enumerates keys for identifying features within the application.
export type FeatureKey = 'AppConfiguration' | 'BetaTesting';

// Enumerates control names within features.
export type ControlName = 'Header' | 'Primary' | 'Secondary';

// Describes the accessibility of features based on the package type.
export interface FeatureAccess {
  premium: boolean;
  basic: boolean;
}

// Defines the role-based access model for different features.
export interface RoleBasedAccess {
  user: FeatureAccess;
  admin: FeatureAccess;
}

// Maps feature keys to their corresponding role-based access configurations.
export type FeatureConfig = {
  [key in FeatureKey]: RoleBasedAccess;
};

// Defines the control access model based on user role.
export interface ControlAccess {
  [role: string]: ControlName[];
}

// Maps package types to control access configurations.
export interface PackageControls {
  premium: ControlAccess;
  basic: ControlAccess;
}

// Maps feature keys to their corresponding package and control access configurations.
export type ControlConfig = {
  [key in FeatureKey]: PackageControls;
};
  
export interface GlobalState {
    isAuthenticated: boolean;
    packageType: PackageType;
    role: RoleType;
    features: FeatureKey[];
    selectedFeature: FeatureKey | null;
}
  
export interface SubControlAccess {
    [role: string]: string[];
}
  
export interface ControlSubControls {
    premium: SubControlAccess;
    basic: SubControlAccess;
}
  
export type SubControlConfig = {
    [control in ControlName]: ControlSubControls;
};

export type GlobalAction = 
| { type: 'SET_AUTHENTICATION'; payload: boolean }
| { type: 'SET_USER_PACKAGE_TYPE'; payload: PackageType }
| { type: 'SET_USER_ROLE'; payload: RoleType }
| { type: 'SET_FEATURES'; payload: FeatureKey[] }
| { type: 'SET_SELECTED_FEATURE'; payload: FeatureKey | null };
