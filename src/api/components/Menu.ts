export interface IMenuItem {
  label: string | (() => string);
  icon?: string;
  to?: string;
  command?: () => unknown;
  url?: string;
  items: Array<never>;
  disable?: boolean | (() => boolean);
  visible?: boolean | (() => boolean);
  target?: string;
  separator?: string;
  style?: unknown;
  class?: string;
  key: unknown;
}

export type IMenu = Array<IMenuItem>;
