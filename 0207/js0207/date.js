// const dt = new Date();

// 날짜 관련 메서드
// const nyear = dt.getFullYear();  //연도
// const nMonth = dt.getMonth() + 1;  //배열 [0, 1, 2, ~ 11]  
// //console.log(nMonth);
// const nDate = dt.getDate();
//시간 getHours();  
//분  getMinutes();
// 초 getSeconds();
// 밀리초(1/000초)  getMilliseconds();

// 2023년 2월 7일 화요일 00시
// const nHours = dt.getHours();
// //요일 
// const myDay = ["일", "월", "화", "수", "목", "금", "토"];
// const nDay = dt.getDay();  

// switch(nDay){
//     case 0:
//         nnDay = "일";
//         break;
//     case 1:
//         nnDay = "월";
//         break;    
// }

// if(nDay == 0){
//     nnDay = "일";
// }else if(nDay == 1){
//     nnDay = "월";
// }...

// const nowDate = `오늘은 ${nyear}년 ${nMonth}월 ${nDate}일 
//                  ${myDay[nDay]}요일 ${nHours}시 입니다.`;
// console.log(nowDate);

// const olp = new Date(1988, 9, 17);
// const dateDiff = dt.getTime() - olp.getTime();

/*
  1초  = 1000;
  1분 = 1000 * 60;
  1시간 = 1000 * 60 * 60
  1일 = 1000 * 60 * 60 * 24
*/
//const result = Math.ceil(dateDiff / (1000*60*60*24));

/*
2023년 연말까지 남은 일수를 계산해 보세요.
*/
const toDay = new Date();
const nowYear = toDay.getFullYear();
const theDate = new Date(nowYear, 11, 31);
//Math.ceil 반올림
const diffDate = theDate.getTime() - toDay.getTime();

const res = Math.ceil(diffDate/(60*60*24*1000));
console.log(`연말까지 ${res}일 남았다~!!!!`);

// NaN  -> Not A Number -> 숫자가 아니다.