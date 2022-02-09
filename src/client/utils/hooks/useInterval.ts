// Ref: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useLayoutEffect, useRef } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useInterval(
  callback: () => void,
  delay: number | undefined | null
) {
  const savedCallback = useRef(null);

  useIsomorphicLayoutEffect(() => {
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
