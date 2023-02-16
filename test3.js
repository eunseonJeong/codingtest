//내가 생각한 코드 : a와 b를 for로 돌리면 되겠다! b는 늘어나는 새로 줄/가로는 한 줄로 사용

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star = '';
    
    for(let j = 0; j < a; j++){    //가로 한 줄
        star += '*';               //출력할데이터  문자형+문자형          
    }
    
    for(let i = 0; i < b ; i++){  //늘어나는 세로 줄
        console.log(star)    
    }     
    
});


//다른 코드-repeat 이용

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");              //split = 문자형
    const a = Number(n[0]), b = Number(n[1]); //
    const row = '*'.repeat(a)                 //*이 a번 도는 가로줄을 만들어 줌
    for(let i =0; i < b; i++){                
        console.log(row)
    }

});