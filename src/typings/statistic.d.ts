declare interface StatisticPeriodMinimal {
  totalSolved: number;
  totalScore: number;
}
declare interface StatisticActivity extends StatisticPeriodMinimal {
  activeDay: number;
  detail: Array<StatisticPeriodMinimal>;
}
