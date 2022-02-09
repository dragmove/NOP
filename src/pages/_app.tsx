import "@client/styles/app.scss";
import Layout from "@client/components/templates/layout/Layout";
import GlobalStyle from "@client/styles/globalStyle";
import type { AppProps } from "next/app";
import { NextPage } from "next/types";
import { ReactElement, ReactNode } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type TrackingLoadingStateType = {
  isVisible: boolean;
  x: number;
  y: number;
  scale: number;
  progress: number;
};

// FIXME: Move global state setting
const trackingLoadingState = atom<TrackingLoadingStateType>({
  key: "trackingLoadingState",
  default: {
    isVisible: true,
    x: 0,
    y: 0,
    scale: 1,
    progress: 0,
  },
});

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
