//count가 올라가는 만큼 price도 올라감
//곱하기 연산자 이용하기 price * count(이용한 만큼)
//크거나 같거나를 꼭 넣어줘야한다.

function solution(price, money, count){
    let needMoney = 0;
    for(i = 1; i <= count; i++){
        needMoney += (i * price)
    }
    return money > needMoney ? 0 : needMoney - money;
}