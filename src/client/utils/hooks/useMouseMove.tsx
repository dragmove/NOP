import { useEffect, useState } from "react";
import { fromEvent, map, throttleTime } from "rxjs";

export function useMouseMove(_throttleTime: number = 0) {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  useEffect(() => {
    const subscribeMouseMove$ = fromEvent(document, "mousemove")
      .pipe(
        throttleTime(_throttleTime),
        map((evt: MouseEvent) => [evt.clientX, evt.clientY])
      )
      .subscribe(([cx, cy]) => {
        setX(cx);
        setY(cy);
      });

    return () => subscribeMouseMove$.unsubscribe();
  }, []);

  return {
    x: x,
    y: y,
  };
}
