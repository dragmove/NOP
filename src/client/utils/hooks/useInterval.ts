// Ref: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useLayoutEffect, useRef } from "react";

export function useInterval(
  callback: () => void,
  delay: number | undefined | null
) {
  const savedCallback = useRef(null);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === undefined || delay === null) return;

    const id: ReturnType<typeof setInterval> = setInterval(
      () => savedCallback.current(),
      delay
    );
    return () => clearInterval(id);
  }, [delay]);
}
