//숫자를 배열 만들어주기 .reverse();
//숫자>문자 String(n); 문자>배열 str.split('')/sort

function solution(n) {
    let answer = [];
     let str = String(n).split('').reverse();
     for(let i = 0; i < str.length; i++){
         answer.push(Number(str[i])) 
     }
      return answer;
}                                                  //["12345"]> join을 넣어봤는데 12345
