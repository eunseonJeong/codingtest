//divisor의 배수들 출력하기 아니면 -1
//나누어 떨어지는 값 찾기 arr.sort(function(a, b)  {return a - b;});
//오름차순으로 정렬
// % divisor === 0  /answer.push('-1')
//for문 안에 else문 조건을 입력하면 계속 돌아가서 원하는 값이 안나온다.

function solution(arr, divisor) {
    var answer = [];
    for(let i =0; i<arr.length; i++){
        if(arr[i] % divisor === 0){                 //배열의 하나씩, 나머지 값
            answer.push(arr[i])                     //배열안의 푸쉬 ~~
        };
    }    
         answer.sort(function(a, b)  {return a - b;}); //푸쉬를 어디에 하는지
        
            if(answer.length == 0){                     //answer가 비어있다!!!
               answer.push(-1) 
            }
    return answer;
}