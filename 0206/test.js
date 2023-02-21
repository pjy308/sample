// const car = {
//     com : '기아',
//     model : '스포티지',
//     color: '흰색',
//     char: 'suv',
//     start: function(){
//         return console.log(this.model + "가 출발합니다.");
//     },
//     stop: function(){
//         return console.log(this.model + "가 정지합니다.");
//     }
// }

const car = new Object();

car.model = "스포티지";
car.start = function(){
    return console.log(this.model + "가 출발합니다.");
}
car.stop = function(){
    return console.log(this.model + "가 정지합니다.");
}

car.start();
car.stop();