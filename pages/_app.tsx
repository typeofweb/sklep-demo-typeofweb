import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider, QueryErrorResetBoundary, useQuery } from '@tanstack/react-query';
import { Layout } from '../components/Layout';
import { ErrorBoundary } from '../components/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <Layout>
            <ErrorBoundary onReset={reset}>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Layout>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}

export default MyApp;
