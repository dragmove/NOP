import "@client/styles/app.scss";
import Layout from "@client/components/templates/layout/Layout";
import GlobalStyle from "@client/styles/globalStyle";
import type { AppProps } from "next/app";
import { NextPage } from "next/types";
import { ReactElement, ReactNode } from "react";
import { store } from "@shared/store/store";
import { Provider } from "react-redux";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <GlobalStyle />
        <Layout>{page}</Layout>
      </>
    ));

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
};

export default App;
