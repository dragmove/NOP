import '@client/styles/app.scss';
import Layout from '@client/components/templates/layout/Layout';
import GlobalStyle from '@client/styles/globalStyle';
import type { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import { ReactElement, ReactNode, StrictMode } from 'react';
import { store } from '@shared/store/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { IS_SERVER } from '@shared/utils/environment';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  console.log('process.env.NODE_ENV :', process.env.NODE_ENV);
  console.log('process.env.PHASE :', process.env.PHASE);

  if (process.env.NODE_ENV === 'development') {
    if (IS_SERVER) {
      (async () => {
        const { server } = await import('@mocks/server');
        server.listen();
      })();
    } else {
      (async () => {
        const { worker } = await import('@mocks/browser');
        worker.start();
      })();
    }
  }

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <GlobalStyle />
        <Layout>{page}</Layout>
      </>
    ));

  return (
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  );
};

export default App;
