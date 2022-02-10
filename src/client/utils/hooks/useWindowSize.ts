import { useEffect, useState } from "react";

export interface WindowSize {
  width: number;
  height: number;
}

// FIXME: develop
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    }

    // FIXME: Change resize with rxjs
    // Apply distinctUntilChanged
    window?.addEventListener("resize", handleResize);
    handleResize();

    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
