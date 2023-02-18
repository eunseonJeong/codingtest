//배열 const last2char_02 = str.slice(-2); // de ,var sliceRs = str.slice(-3);
//끝자리만 남기고 다 * 처리
//* 문자열 반복 > return srt.repeat(n); > 뒤에 4자리를 * 만큼 넣어준다! 

function solution(phone_number) {
    var answer = '';
    let reult = "*".repeat(phone_number.length - 4) + phone_number.slice(-4)
    return reult;
}
