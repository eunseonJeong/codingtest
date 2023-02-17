//순서배열 필요 sort 사용?
//머쓱이 키 = 변수로 들어가야 함 근데 문제에서 height가 머쓱이 키 매개변수다 >배열 요소추가
//배열의 해당 인덱스를 가져오기??? 어떻게? find을 사용하여 배열 앞에서 몇번째인지 찾아줌
//머쓱이보다 키가 큰 사람 수 리턴 조건: 오름차순으로 하면 머쓱이 앞에 몇명있는지 나옴 >push

function solution(array, height) {
    var answer = 0;
    
    array.push(height);                                     //배열에 머쓱이 키 넣어주기
    
    array.sort(function (array,height) {
        return height - array;                              //내림차순정리
        console.log(array.find(array));
        console.log(array.indexOf(height));
    })
    return array.indexOf(height);
};
//변수명 어떤걸 선정, 어떤걸 가르키는지 신경쓰기..