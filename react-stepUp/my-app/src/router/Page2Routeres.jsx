import { Page2 } from "../page2";
import { UrlParameter } from "../UrlParameter";
export const Page2Routeres = [
  {
    path: "/",
    exact: true,
    children: <Page2 />,
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />,
  },
];
