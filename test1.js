function solution(sizes) {

    let bigNumber = 0;                      //큰 숫자중에 제일 긴 숫자~
    let smNumber = 0;                       //작은 숫자중에 제일 긴 숫자~
    for (let i = 0; i < sizes.length; i++) { 
        if (sizes[i][0] > sizes[i][1]) {    //0이 들어가면서 사이즈의 큰거 가져온다.
            if (sizes[i][0] >= bigNumber) {  //이긴놈이 big보다 큰 것
                bigNumber = sizes[i][0]     
            }
            if (sizes[i][1] >= smNumber) { //작은 놈중에 제일 큰 놈

                smNumber = sizes[i][1]      
            }


        } else {

            if (sizes[i][1] >= bigNumber) { //이긴놈이 big보다 큰 것
                bigNumber = sizes[i][1]
            }
            if (sizes[i][0] >= smNumber) {  //작은 놈중에 제일 큰 놈
                smNumber = sizes[i][0]
            }
        }


    }

    var answer = smNumber * bigNumber;
    return answer;
}