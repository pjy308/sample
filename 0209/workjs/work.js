const str = "hello thank you good luck to you"
console.log(str.charAt("16"));
console.log(str.indexOf("you"));
console.log(str.match("luck"));
console.log(str.substr(21,4));
console.log(str.substring(6, 12));
console.log(str.replace("you", "me"));
console.log(str.length);
let t = str.split(" ");
let tt=Array();
console.log(t);
for(let i = 0; i < t.length; i ++){
    console.log(t[i].replace("you", "me"));
}
console.log(tt.join(" "));
// 1. 프롬포트 창으로 영문 이름을 물어보고 사용자가 소문자 대문자 어떤것을 썻던 간에 화면에 대문자로 출력하라.
// 2. 전화번호를 물어 본 후 마지막 4자를 ****로 바꾸어 출력하라
// const username = prompt("당신의 영문이름은 무엇 입니까?");
// const usertel = prompt(" 당신의 연락처는 무엇 입니까?");