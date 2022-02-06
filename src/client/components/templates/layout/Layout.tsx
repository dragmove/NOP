import { Copyright } from "@client/components/atoms/copyright/Copyright";
import { Dot } from "@client/components/atoms/shape/Dot";
import Logo from "@client/components/molcules/logo/Logo";
import Navi from "@client/components/molcules/navigation/Navi";
import { useWindowSize, WindowSize } from "@client/utils/hooks/useWindowSize";
import { APP_NAME } from "@shared/constants/common";
import Head from "next/head";
import { ReactElement, SyntheticEvent, useState } from "react";
import styled from "styled-components";

const Layout = ({ children }): ReactElement => {
  const windowSize: WindowSize = useWindowSize();

  // FIXME: Manage navi state
  const [navi, setNavi] = useState({
    d1Index: 0,
    d2Index: 0,
  });

  const handleNaviClick = (evt: SyntheticEvent, d1Index: number) => {
    setNavi({
      ...navi,
      d1Index,
    });
  };

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

      <Wrap
        className="app"
        style={{ width: windowSize.width, height: windowSize.height }}
      >
        <Dot
          radius={2}
          left="18px"
          top="18px"
          backgroundColor={"#fff"}
          opacity={0.25}
        />
        <Dot
          radius={2}
          right="18px"
          top="18px"
          backgroundColor={"#fff"}
          opacity={0.25}
        />
        <Dot
          radius={2}
          right="18px"
          bottom="18px"
          backgroundColor={"#fff"}
          opacity={0.25}
        />
        <Dot
          radius={2}
          left="18px"
          bottom="18px"
          backgroundColor={"#fff"}
          opacity={0.25}
        />

        <header>
          <Logo />
        </header>

        {children}

        <Navi
          onClick={handleNaviClick}
          d1Index={navi.d1Index}
          d2Index={navi.d2Index}
        />

        <Footer>
          <Copyright />
        </Footer>
      </Wrap>
    </>
  );
};

export default Layout;

const Wrap = styled.div`
  overflow: auto;
`;

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
`;
