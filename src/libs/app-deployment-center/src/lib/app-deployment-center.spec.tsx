import { render } from '@testing-library/react';

import AppDeploymentCenter from './app-deployment-center';

describe('AppDeploymentCenter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppDeploymentCenter />);
    expect(baseElement).toBeTruthy();
  });
});
