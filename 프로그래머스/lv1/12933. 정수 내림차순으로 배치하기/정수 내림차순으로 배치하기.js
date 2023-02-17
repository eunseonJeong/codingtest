//내림차순인데 자릿수 확인하기
//리턴값은 오름차순
//sort() - 배열을 정렬/reverse() - 원소 순서를 반대로
//n.숫자 >문자>배열>sort>reverse>문자>숫자
//숫자>문자 String(n);
//문자>배열 str.split('')/sort
//배열합치기 join('')

function solution (n){
    let answer = []
    let str = String(n).split('').sort().reverse();     //문자로 바꿔주고,배열로바꾸고,
                                                        //배열정렬, 반대로
    for(let i =0; i< str.length; i++){
        answer.push(str[i])
    }
    return Number(answer.join(''))                      
}
                   
