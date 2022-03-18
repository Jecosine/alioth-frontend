declare interface ResponseData<T> {
  code: number;
  msg: string;
  data: T | null;
}
