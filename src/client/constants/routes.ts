export interface Route {
  id: number;
  title: string;
  url: string;
  d1Index: number;
  d2Index: number;
}

export const ROUTES: Readonly<Route>[] = [
  {
    id: 1,
    title: "PROFILE",
    url: "/profile",
    d1Index: 1,
    d2Index: 0,
  },
  {
    id: 2,
    title: "WORK",
    url: "/work",
    d1Index: 2,
    d2Index: 0,
  },
  {
    id: 3,
    title: "SERVICE",
    url: "/service",
    d1Index: 3,
    d2Index: 0,
  },
];
