function solution(price, money, count){
    let needMoney = 0;
    for(i = 1; i< count; i++){
        needMoney += (i * price)
    }
    return money > needMoney ? 0 : needMoney - money;
}