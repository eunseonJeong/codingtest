// 객체 안에서 더해주는 방식
//배열에 어떤 값이 들어있는지 확인할 때 includes()를 사용
//****초기값 설정**** 초기값에 더해주고 어떻게 해보자.

function solution(numbers) {
    var answer = 0;      
    for(i = 0; i < numbers.length; i++){
    answer += numbers[i];                   //어디에 더해야 하는지?
    }
    return 45 - answer;
}

// function solution(numbers) {
// var answer = 0;
//     for(let i=0; i < 10; i++){
//         if(!numbers.includes(i)) answer += i;           //!하나 일때 false사용,
//     }
//     return answer;
// }