//자릿수의 합
//배열안의 합
//문자에서 숫자 바꿔주기
//i = 1라고 입력해서 오류남 , i = 0이라고 입력해줘야 함

function solution(n){
    let answer = 0;
    let str = String(n).split('')
    for(let i = 0; i < str.length; i++) {
        answer += Number(str[i]);
}
    return answer
}