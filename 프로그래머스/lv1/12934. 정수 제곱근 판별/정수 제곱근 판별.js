//제곱근 사용 pow? sqrt? > Math.sqrt([대상 숫자]);라 sqrt사용
//n에서 +1을 한 값에 return이 되야한다.
//변수명..

function solution(n) {          
    let num = Math.sqrt(n);     
    // let num = n을 제곱근으로 만들어줘야함. 그래야 -1이 나옴
    return Number.isInteger(num) ? (num+1)**2 : -1;
}