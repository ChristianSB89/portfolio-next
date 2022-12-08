export default function codingYear(days, months, years) {
  let date = new Date();
  //   date.setDate(date.getDate() + days);
  //   date.setMonth(date.getMonth() + months);
  date.setFullYear(date.getFullYear() - 2022);
  return date;
}
