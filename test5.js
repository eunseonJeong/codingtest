//Math.floor 와 substr 사용
function solution(s){
    let answer = [];
    if (s.length % 2 == 1){                      //홀수
        answer = s[Math.floor(s.length / 2)];
    }
    else {
        let a = s.length / 2;                   //짝수 . 뒤에 있는 부분이 선택됨.
        answer = s.substr(a-1, 2);             //substr은 index로 0부터 시작한다.
    }
    return answer;
};

//boolaean 사용
function solution(s){
    var len = s.length;
var isOdd = Boolean(len % 2);                //먼저 불린사용하여 참과 거짓을 정의함
    var answer = '';
    if (isOdd){
        answer = s[Math.floor(len / 2)];    //나머지 값이  1인 홀수면 문자 하나만 출력
    } else {
        answer = s[len / 2-1]+s[len / 2];    //나머지 값이 2인 짝수면 문자 2개 출력
    }
    return answer;
}
