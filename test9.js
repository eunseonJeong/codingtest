function solution(s) {
    var answer = true;
    // let arr = []
    if (s.length === 4 || s.length === 6) {
        if (isNaN(s)) {
            answer = false;
        } else {
            answer = true;
        }
    } else {
        answer = false;
    }
    return answer
}