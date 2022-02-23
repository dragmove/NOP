import { GoTopBtn } from "@client/components/atoms/button/GoTopBtn";
import { Copyright } from "@client/components/atoms/copyright/Copyright";
import { Dot } from "@client/components/atoms/shape/Dot";
import Logo from "@client/components/molcules/logo/Logo";
import Navi from "@client/components/molcules/navigation/Navi";
import { Route, ROUTES } from "@client/constants/routes";
import { useWindowSize, WindowSize } from "@client/utils/hooks/useWindowSize";
import { APP_NAME } from "@shared/constants/common";
import {
  resizeBrowser,
  updateBrowserScrollTop,
} from "@shared/store/slices/browser";
import { updateGoTopBtnVisible } from "@shared/store/slices/goTopBtn";
import { NaviState, updateNavi } from "@shared/store/slices/navi";
import { RootState } from "@shared/store/store";
import head from "lodash.head";
import Head from "next/head";
import { ReactElement, SyntheticEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  partition,
  tap,
} from "rxjs";
import styled from "styled-components";

const DEBOUNCE_DELAY_SCROLL_TOP = 50;

const Layout = ({ children }): ReactElement => {
  const appNodeRef = useRef<HTMLElement>(null);

  const dispatch = useDispatch();
  const navi = useSelector((state: RootState) => state.navi);
  const goTopBtn = useSelector((state: RootState) => state.goTopBtn);

  const windowSize: WindowSize = useWindowSize();

  const handleNaviClick = (evt: SyntheticEvent, d1Index: number): void => {
    if (d1Index === navi.d1Index) return;
    dispatch(updateNavi({ d1Index }));
  };

  const handleGoTopBtnClick = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    appNodeRef.current?.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(
      resizeBrowser({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );

    const naviDepth: NaviState = getNaviDepth(location.pathname);
    dispatch(updateNavi(naviDepth));

    const scrollTop$ = fromEvent(appNodeRef.current, "scroll").pipe(
      map((evt) => (evt.target as HTMLElement).scrollTop),
      distinctUntilChanged()
    );
    const subscribeScrollTop$ = scrollTop$
      .pipe(
        debounceTime(DEBOUNCE_DELAY_SCROLL_TOP),
        tap((scrollTop) => dispatch(updateBrowserScrollTop(scrollTop)))
      )
      .subscribe();

    const [_subscribeHideGoTopBtn$, _subscribeShowGoTopBtn$] = partition(
      scrollTop$,
      (scrollTop: number) => scrollTop === 0
    );

    const subscribeHideGoTopBtn$ = _subscribeHideGoTopBtn$
      .pipe(
        debounceTime(DEBOUNCE_DELAY_SCROLL_TOP),
        tap(() => dispatch(updateGoTopBtnVisible(false)))
      )
      .subscribe();

    const subscribeShowGoTopBtn$ = _subscribeShowGoTopBtn$
      .pipe(
        debounceTime(DEBOUNCE_DELAY_SCROLL_TOP),
        tap(() => dispatch(updateGoTopBtnVisible(true)))
      )
      .subscribe();

    return () => {
      subscribeScrollTop$.unsubscribe();
      subscribeHideGoTopBtn$.unsubscribe();
      subscribeShowGoTopBtn$.unsubscribe();
    };
  }, []);

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
        ref={appNodeRef}
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
          <GoTopBtn
            onClick={handleGoTopBtnClick}
            isVisible={goTopBtn.isVisible}
          />
        </Footer>
      </Wrap>
    </>
  );
};

export default Layout;

function getNaviDepth(pathname): NaviState {
  const route: Route = head(ROUTES.filter((obj) => obj.url === pathname));
  const result = route
    ? {
        d1Index: route.d1Index,
        d2Index: route.d2Index,
      }
    : {
        d1Index: 0,
        d2Index: 0,
      };

  return result;
}

const Wrap = styled.div`
  overflow: auto;
`;

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
`;
