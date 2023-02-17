//평균합 구하는 방법: (첫번째 숫자+끝 숫자)/2 + 원래 숫자 곗수//
// a,b일 때만 가능

//number들의 합을 number.length로 나눔//
function solution(numbers) {
    var answer = 0;
    for (let i = 0; i < numbers.length;i++){
        answer += numbers[i]                 //answer = numbers의 합
    }
    return answer/numbers.length
}

//reduce사용//
function solution(numbers){
return numbers.reduce((acc,curr)=>acc + curr},0)/numbers.length
}