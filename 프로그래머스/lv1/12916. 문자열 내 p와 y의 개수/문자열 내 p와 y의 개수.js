//두 글자의 갯수가 같다면 true, 다르면 false, 둘다 없다면 false
//p||P||y||Y >toLowerCase 대소문자변경
//글자비교 >비교연산자?nope>배열에서 특정 값>count
// https://developer-talk.tistory.com/114

function solution(s){
    var answer = true;
    let str = s.toLowerCase();
    let count = 0;
    
    for(let i =0; i<s.length; i++){                    
        if(str[i] === 'y'){             //y를 찾아서 +                
            count++;
        } else if(str[i] === 'p'){         //p를 찾아서 - 하면 0이 됨 그러면 true
            count--;
        }
    }
        
            if(count !== 0){          //비교할때 
                answer = false;         //0이 아닌경우는 
            } else {
                answer = true;
            }
            return answer;
}
