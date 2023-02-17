// if사용 양수(+) true : 음수(-) false
// return 값은 각 배열 함수들을 더한값 

function solution(absolutes, signs) {
    var answer = 0;
    for(let i =0; i < absolutes.length; i++){
    if( signs[i] === true ){
        answer += absolutes[i]
    } else {
        answer += -1 * absolutes[i]
    }
    }
    return answer;
}
