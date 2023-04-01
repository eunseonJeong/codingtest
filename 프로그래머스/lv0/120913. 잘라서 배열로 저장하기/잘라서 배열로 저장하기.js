function solution(my_str, n) {
    let strArr = my_str.split("");
    let arr = [];
    
    while(strArr.length>0) {
        arr.push(strArr.splice(0,n).join(""))
    }
    return arr
}