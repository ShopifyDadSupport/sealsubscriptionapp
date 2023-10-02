import {
  HomeIcon,
  LayoutIcon,
  UserIcon,
  PagesIcon,
  AddCircleIcon,
} from "./Icons";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "dashboards",
    path: "dashboards",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Subscriptions",
    path: "Subscriptions",
    icon: <LayoutIcon />,
  },
  {
    id: 3,
    name: "Add Interval",
    path: "AddInterval",
    icon: <AddCircleIcon />,
  },
  {
    id: 4,
    name: "Add Page",
    path: "AddPage",
    icon: <AddCircleIcon />,
  },
  {
    id: 5,
    name: "Integrate  Auto Shipped",
    path: "Settings",
    icon: <PagesIcon />,
  }
];
