//조건문 숫자만 있으면 ture, 문자 포함되어있다면 false
//if s의 길이가 4 6
//isNaN은 is Not a Number 문자가 들어가면 참
// parseInt() 는 정수만 뽑는다! number은 정수도 포함
//4,6개 중에 문자 ㅇ false ,x true /true값 추가/ 11번이면 넘어가자 ~
// str.includes('Hello')
function solution(s) {
    var answer = true;
    if(s.length === 4 || s.length === 6 ){         
    } else {
        answer = false;
        return answer;                          //
    }
    
    if(s.includes('e')){
        answer = false;
    } else{
            if(isNaN(s)){
                answer = false;
            }else {
                answer = true;
            }
            }
    return answer;
}