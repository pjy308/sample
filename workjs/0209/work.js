const str ="Hello Thank you good luck to you";

//1. 인덱스 16에 저장된 문자
console.log(str.charAt(16));

//2. 왼쪽부터 제일 먼저 발견된 you 의 인덱스 
console.log(str.indexOf("you"));

//3. luch 과 일치하는 문자 match
console.log(str.match("luck"));
console.log(str.search("luck"));

console.log(str.substr(21, 4));  //a 부터 b의 갯수만큼
console.log(str.substring(6, 12));  //a부터 b이전 까지
console.log(str.replace("you", "me"));
console.log(str.length);

let t = str.split(" ");  //문자열을 공백기준으로 나누어 t라는 배열로 만듬
let tt = Array();  //공백 배열을 하나 만듬
console.log(t);
for(let i=0; i < t.length; i++){  //t배열의 크기만큼 루프를 돌리면서 you를 me로 바꿈
    tt[i] = t[i].replace("you", "me");  //바꾼 변수를 배열 tt에 저장
}
console.log(tt.join(" "));  //배열 tt를 공백을 기준으로 합침