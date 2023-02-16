//num이 짝수면 %2 했을때의 값이 0이 되면서 "Even"이라는 문자열을 반환하게 되며
//num이 홀수면 %2 했을때의 값이 1이 되면서 "Odd"라는 문자열을 반환하게 되는 식

// 나머지(%) 연산자를 활용해보자!
//num을 %2해서 0 = true면 "Even" /1 = false면 "Odd"
//처음에 해 본 코드
function solution(num) {        //solution을 불러 오려면 마지막에 soluttion(숫자);
    
    var answer = '';
    
    if(num % 2 == 0){          //짝수
        return "Even";
    } else {
        return "Odd";
    }
}


// //위에 if문과 같은 삼항연산자 사용 식
// function solution(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
//   }



//삼항연산자 사용 (바뀌기 전 문제라 나랑 다를 수 있음)
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log("결과 : " + evenOrOdd(2));
  console.log("결과 : " + evenOrOdd(3));
