import Layout from "@client/components/templates/layout/Layout";
import "@client/styles/app.scss";
import GlobalStyle from "@client/styles/globalStyle";
import type { AppProps } from "next/app";
import { NextPage } from "next/types";
import { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";

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

  return <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>;
};

export default App;
