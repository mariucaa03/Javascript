const myAge = 21;
let canVote;

if(myAge >= 18){
    canVote = true;
}
else{
    canVote = false;
}
console.log("Can vote: ", canVote);

canVote = myAge >= 18 ? true : false;
console.log("Can vote: ", canVote);

const subscription = "premium";
let credits;

if(subscription === "free"){
    credits = 0;
}
else if( subscription ==="pro"){
    credits = 100;
}
else if (subscription === "premium"){
    credits = 1000;
}
else{
    credits = 0;
}

console.log("Credits: ", credits);

// SWITCH

switch(subscription){
    case "free":
        credits = 0;
        break;

    case "pro":
        credits = 100;
        break;

    case "premium":
        credits = 1000;
        break;    

    default: 
    credits = 0;    
}

console.log("Credits: ", credits);


// SCOPE

if(true){
    let hello = "Hello";
    console.log(hello);
}

