declare interface ResponseData<T> {
  code: number;
  msg: string;
  data: T | null;
}

declare interface ItemListInPage<T> {
  itemCount: number;
  pageNumber: number;
  data: Array<T>;
}

declare interface ItemListTableModel<T> {
  totalPage: number;
  itemPerPage: number;
  total: number;
  data: Map<number, ItemListInPage<T>>;
}
