import { MenuItem, MenuItemCommandEvent } from "primevue/menuitem";
import eventBus from "vue3-eventbus";
import { useToast } from "primevue/usetoast";
export interface IMenuItem {
  label: string | (() => string);
  icon?: string;
  to?: string;
  command?: () => unknown;
  url?: string;
  items?: Array<IMenuItem>;
  disable?: boolean | (() => boolean);
  visible?: boolean | (() => boolean);
  target?: string;
  separator?: string;
  style?: unknown;
  class?: string;
  key?: unknown;
}

export type IMenu = Array<IMenuItem>;

export const navigationMenu: MenuItem[] = [
  // {
  //   label: "Training",
  //   icon: "pi pi-fw pi-book",
  // },
  {
    label: "Todos",
    icon: "pi pi-fw pi-check-square",
  },
  {
    label: "Team",
    icon: "pi pi-fw pi-users",
    items: [
      {
        label: "Discovery",
        icon: "fa-regular fa-compass",
        to: "/teamDiscovery",
      },
      {
        label: "My Teams",
        icon: "fa-solid fa-user-group",
        to: "/myTeams",
      },
    ],
  },
  {
    label: "Contest",
    icon: "fa-regular fa-chess-king",
  },
  {
    label: "Problems",
    icon: "fa-regular fa-file-code",
    to: "/problem",
  },
];
export const dialMenu: MenuItem[] = [
  {
    label: "Search",
    icon: "pi pi-search",
    command(event: MenuItemCommandEvent) {
      console.log(event);
    },
  },
  {
    label: "Search",
    icon: "pi pi-search",
    command(event: MenuItemCommandEvent) {
      console.log(event);
    },
  },
  {
    label: "Search",
    icon: "pi pi-search",
    command(event: MenuItemCommandEvent) {
      console.log(event);
    },
  },
];
export const userMenu: MenuItem[] = [
  {
    label: "My Profile",
    icon: "fa-solid fa-address-card",
    to: "/user",
  },
  {
    label: "Console",
    icon: "fa-solid fa-terminal",
    to: "/console",
  },
  {
    label: "Settings",
    icon: "fa-solid fa-gear",
    to: "/settings",
  },
  {
    label: "Logout",
    icon: "fa-solid fa-arrow-right-from-bracket",
    to: "/logout",
  },
];

export const userProfileMenu: MenuItem[] = [
  {
    label: "Profile",
    icon: "fa-solid fa-id-badge",
    to: "/user/profile",
  },
  {
    label: "Account",
    icon: "fa-solid fa-user",
    to: "/user/account",
  },
  {
    label: "Privacy",
    icon: "fa-solid fa-lock",
    to: "/user/privacy",
  },
  {
    label: "Logout",
    icon: "fa-solid fa-arrow-right-from-bracket",
    to: "/logout",
  },
];
