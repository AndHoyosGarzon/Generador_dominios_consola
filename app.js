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


function generadorDominios(arr1, arr2, arr3){

    for(let idx1 of arr1){
       // console.log(idx)
        for(let idx2 of arr2){
         //   console.log(idx2)
            for(let idx3 of arr3){
                console.log(`${idx1}${idx2}${idx3}.com`)
            }
        }
    }

}

console.log(generadorDominios(pronoun, adj, noun));