import { MenuItem } from "primevue/menuitem";
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
  {
    label: "Training",
    icon: "pi pi-fw pi-book",
  },
  {
    label: "Todos",
    icon: "pi pi-fw pi-check-square",
  },
  {
    label: "Team",
    icon: "pi pi-fw pi-users",
    items: [
      {
        label: "Left",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Right",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Center",
        icon: "pi pi-fw pi-align-center",
      },
      {
        label: "Justify",
        icon: "pi pi-fw pi-align-justify",
      },
    ],
  },
  {
    label: "Contest",
    icon: "pi pi-fw pi-flag",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Search",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Filter",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                label: "Print",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "Problems",
    icon: "pi pi-fw pi-list",
    items: [
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Save",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "pi pi-fw pi-calendar-times",
        items: [
          {
            label: "Remove",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
    ],
  },
];

export const userMenu: MenuItem[] = [
  {
    label: "Update",
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
