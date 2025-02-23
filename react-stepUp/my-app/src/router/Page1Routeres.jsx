import { About } from "../About";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
export const Page1Routeres = [
  {
    path: "/",
    exact: true,
    children: <About />,
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />,
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />,
  },
];
