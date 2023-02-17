// for in으로 반복해주고, 마지막 배열에서 더해준다. 객체
// for of 쓴다.
// 객체 안에서 더해주는 방식
//****초기값 설정**** 초기값에 더해주고 어떻게 해보자.

function solution(numbers) {
    var answer = 0;      
    for(i = 0; i < numbers.length; i++){
    answer += numbers[i]                    //어디에 더해야 하는지?
    }
    return 45 - answer
}
