Main Application Structure and Description:
├── Main Application (Root)
│   ├── <GlobalProvider>
│   │   Provides global state and context to all components, managing state such as authentication, role, and package type.
│
├── src - Main source directory for the application's code.
│   ├── Components
│   │   ├── settings
│   │   └── app-configuration
│   │       └── AppConfiguration.tsx
│   │           Manages the configuration and settings within the app, providing an interface for users to customize the icon splash generator settings.
│   │
│   ├── config
│   │   └── featureAccessConfig.ts
│   │       Defines the access to features based on user roles (admin/user) and package type (basic/premium). This configuration is central to the role-based access control system.
│   │
│   ├── Controllers
│   │   ├── DisplayController.tsx
│   │   │   Manages the UI logic, rendering controls and features based on the user's selected settings. It ensures only accessible controls are displayed according to the user’s role and package.
│   │   └── PreviewController.tsx
│   │       Responsible for rendering a live preview of the current user-selected settings, such as icon size, background, etc.
│   │
│   ├── handler
│   │   └── featurehandler.ts
│   │       Contains logic for fetching feature configurations based on the user’s role and package. Ensures only the features available to the user are displayed in the UI.
│   │
│   ├── lib
│   │   └── app-deployment-center.tsx
│   │       The main component that integrates all the features and controls, organizing them into a cohesive UI. It acts as the central interface for the app, managing layout and displaying user-selected options.
│   │
│   ├── provider
│   │   ├── GlobalContext.tsx
│   │   │   Provides global context for managing the application's state. It shares authentication, role, and package information across all components.
│   │   └── reducer.ts
│   │       Contains the logic for updating the global state through various actions, such as setting user roles, package types, and available features.
│   │
│   ├── utils
│   │   └── actionTypes.ts
│   │       Defines constants for the action types used in state management (e.g., SET_AUTHENTICATION, SET_FEATURES). These ensure consistent state transitions across the app.
│
├── tsconfig.json - Configures TypeScript for the project.
├── tsconfig.lib.json - TypeScript configuration for library builds.
├── tsconfig.spec.json - TypeScript configuration for specifications.
└── vite.config.ts - Configuration for the Vite build tool.

File Breakdown and Functionality:
- **GlobalProvider**:This top-level component is responsible for providing a global state context to all child components, ensuring that the state, including user authentication, role, and package type, is accessible throughout the application. It is crucial for managing global state and passing it down to nested components.
- **Components**: This directory is organized into sub-directories for handling various parts of the user interface, including:
App-Configuration: Manages the configuration and settings within the app, providing an interface for users to customize the icon splash generator settings.
- **Configurations** This section includes configuration files like featureAccessConfig.ts, which define the access controls and feature availability for users based on their roles (user/admin) and package type (basic/premium). These configurations are key to enforcing role-based access throughout the application.
- **Controllers**The controller components orchestrate the rendering of the UI based on the global state. They manage which features, settings, and controls are available to users depending on their role and package.
DisplayController.tsx ensures the appropriate controls are shown and accessible.
PreviewController.tsx renders a live preview of current settings.
- **Handlers**:These are responsible for fetching and computing the configurations for features and controls. They ensure that only permissible elements are accessible based on the user's role and permissions.
- **Providers**:The provider components, such as GlobalContext.tsx, manage the state context and handle state updates via reducers. They ensure that changes in global state are reflected across the entire application.
- **Types**:This folder centralizes all TypeScript type definitions used across the application, ensuring consistency and type safety.
- **Utils**:The utility folder contains constants such as actionTypes.ts, which are used to define actions in the global state management system. These constants help maintain consistency when dispatching state updates.
- **Library Component (app-deployment-center.tsx)**: This is the core component of the application, tying together various controllers, settings, and previews to provide the main user interface for the icon splash generator feature. It acts as the central hub, managing layout, interactions, and the overall flow of the app.

