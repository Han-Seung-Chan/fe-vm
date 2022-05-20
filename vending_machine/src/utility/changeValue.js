export const changeKoreanLocalMoney = (number) =>
  `${Number(number).toLocaleString('ko-KR')}`;

export const changeStrMoneyToNumMoney = (strMoney) =>
  strMoney.split(',').join('');
