declare interface Announcement {
  scope: "global" | "group";
  type: "very important" | "important" | "info";
  author: UserDataMinimal;
  read: boolean;
  title: string;
  content: string;
  createdTime: Date;
  modifiedTime: Date;
}
