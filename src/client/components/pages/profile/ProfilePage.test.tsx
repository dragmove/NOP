import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProfilePage from './ProfilePage';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('ProfilePage', () => {
  let queryClient;

  beforeAll(() => {
    queryClient = new QueryClient();
  });

  it('render', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        {<ProfilePage />}
      </QueryClientProvider>,
    );
  });

  it('render career title', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        {<ProfilePage />}
      </QueryClientProvider>,
    );

    expect(screen.getByText('CAREER.')).toBeInTheDocument();
  });

  // TODO: write mock api test with msw
});
