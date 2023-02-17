//js날짜 함수고민
//a,b를 가지고 요일찾기
//let day = new Date(a-1,b); a-1을 사용하는 이유는 일요일=-1 월요일 =1

function solution(a, b) {
let day = new Date(2016,a-1,b);
     const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
     let week = WEEKDAY[day.getDay()];
     return week
}