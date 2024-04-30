/**
thegreatjogger.com
thegreatracoon.com
ourgreatjogger.com
ourgreatracoon.com
thebigjogger.com
thebigracoon.com
ourbigjogger.com
ourbigracoon.com
 * 
 */

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


    for(let idx1 of pronoun){
       
        for(let idx2 of adj){
         
            for(let idx3 of noun){
                console.log(`${idx1}${idx2}${idx3}.com`)
            }
        }
    }
    


