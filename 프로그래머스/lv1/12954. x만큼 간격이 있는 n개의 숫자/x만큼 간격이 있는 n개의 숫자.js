//x += 을 사용 n의 값을 for문 
//곱한값 다 배열에 넣어주기 = push i = 0 i * x

function solution(x, n) {
    var answer = [];{
        for(i = 1; i <= n; i++){
            answer.push(i * x);
    }
    return answer;
}
}