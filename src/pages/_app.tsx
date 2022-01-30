import "@client/styles/app.scss";
import GlobalStyle from "@client/styles/globalStyle";
import { APP_NAME } from "@shared/constants/common";
import type { AppProps } from "next/app";
import Head from "next/head";
import { FC, ReactElement } from "react";

const App: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  const Layout = EmptyLayout;

  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{APP_NAME}</title>
        {/* FIXME: Check favicon */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/favicon/favicon.ico"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Lato:300,400|Carme|Roboto|Rubik:300,400|Gothic+A1|Montserrat:400,500,600,700,800"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/earlyaccess/nanumgothic.css"
        />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;

const EmptyLayout = ({ children }): ReactElement => <>{children}</>;
