// WHILE

let clientCounter = 18;
const maxClients = 25;

while (clientCounter <= maxClients){
    console.log(clientCounter);
    clientCounter += 1;
}

// DO ... WHILE

// let password = "";

// do{
//     password = prompt("Va rugam sa introduceti o parola de cel putin 4 caractere", "");
// }
// while (password.length < 5);

// console.log("Parola introdusa:c", password);

//  FOR

// for (let i = 0; i <= 20; i += 5){
//     console.log(i);
// }

// const target = 3;
// let sum = 0;

// for ( let i = 0; i <= target; i +=1){
//     sum += 1;
// }

// console.log(sum);

// const max = 10;

// for( i = 0; i < max; i += 1){
//     console.log(`${max} = `, max % i);
// }


//  BREAK

// for ( let i = 0; i <= 5; i += 1){
//     console.log(i);

//     if( i === 3){
//         console.log("Am gasit numarul 3, intrerupem bucla");
//         break;
//     }
// }

// console.log("Log dupa bucla");


//  CONTINUE

const number = 10;

for (let i = 0; i < number; i += 1){
    if(i % 2 === 0){
        continue;
    }

    console.log("Numarul impar i: ", i);
}