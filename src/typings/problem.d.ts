declare interface ProblemTagMinimal {
  id: number;
  name: string;
}

declare interface ProblemMinimal {
  id: number;
  title: string;
  difficulty: string; // TODO: customize difficulty settings
  attempt: number;
  solved: number;
  author: UserDataMinimal;
  tags: Array<ProblemTagMinimal>;
}

declare interface ProblemInput {
  title: string;
  content: string;
  author: number;
  tags: Array<number>;
}
declare type Problems = Array<ProblemMinimal>;
type ProblemListInPage = ItemListInPage<
  T extends ProblemMinimal ? T : ProblemMinimal
>;

type ProblemListTableModel = ItemListTableModel<
  T extends ProblemMinimal ? T : ProblemMinimal
>;
