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

type ProblemListInPage = ItemListInPage<
  T extends ProblemMinimal ? T : ProblemMinimal
>;

type ProblemListTableModel = ItemListTableModel<
  T extends ProblemMinimal ? T : ProblemMinimal
>;
