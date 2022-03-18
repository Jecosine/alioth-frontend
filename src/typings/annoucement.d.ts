declare interface Announcement {
  scope: "global" | "group";
  type: "very important" | "important" | "info";
  author: UserDataMinimal;
  title: string;
  content: string;
  createdTime: Date;
  modifiedTime: Date;
}
