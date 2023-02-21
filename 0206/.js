// function m(x, y){
//     return x * y;
// }
// console.log(m(10, 30));

// let result = () => {
//     return 5 * 10;

console.log(result());

const person = {
    firstname : "철수",
    lastname : "안",
    age : 60,
    fullname : function(){
        return this.lastname + " " + this.firstname
    }
}
const result = "나이는" + person.age + "이며 이름은" + person.fullname() + 
console.log(result);
// car  라는 객체를 만들고
// 회사명 : 포르쉐 자동차명: 모델명 승차인원 : 1명
// 메소드 자동차가 출발합니다.
// 출력 포르쉐의 718 모델 자동차가 출발합니다.
// let car = "포르쉐";
// const car = {type:"포르쉐", model:"718", person:"1"};