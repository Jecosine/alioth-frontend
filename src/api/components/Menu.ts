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
    icon: "pi pi-refresh",
  },
  {
    label: "Delete",
    icon: "pi pi-times",
  },
  {
    label: "Vue Website",
    icon: "pi pi-external-link",
    url: "https://vuejs.org/",
  },
  {
    label: "Router",
    icon: "pi pi-upload",
    to: "/fileupload",
  },
];
