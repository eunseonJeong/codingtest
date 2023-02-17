// n의 숫자만큼 배열이 추가가 됨!
//변수명... 제발............ 확인하자..

function solution(n) {
    var srt = '수박';              //['수박']이라고하면 안되나? ['abc']
                                    //수박수라고 찍혀야되서 안되는건가?
    if(n % 2 === 0){
        return srt.repeat(n/2);     //수박이 몇번들어가는지 확인하자!
    } else {
        return srt.repeat(n/2)+'수';
    }
    console.log(n)
}