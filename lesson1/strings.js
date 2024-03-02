const namee = "Mariuca"; // String
const surname = 'Zahariuc';
const fullName = namee + " " + surname; // the space between the words is also an index

console.log("Length", fullName.length);

console.log("toLowerCase", fullName.toLowerCase());
console.log("toUpperCase", fullName.toUpperCase());

console.log("indexOf", fullName.indexOf('r'));
console.log("indexOf", fullName.indexOf('uca'));
console.log("indexOf", fullName.indexOf('uta')); // does not exist


console.log("includes", fullName.includes("uca"));
console.log("includes", fullName.includes("rta")); // does not exist


console.log("endsWith", fullName.endsWith("riuc"));
console.log("endsWith", fullName.endsWith("uriuc")); // does not exist


console.log("replace", fullName.replace("uca", "iiii"));
console.log("replace", fullName.replace("a", "iiii")); // replace just the first a 
console.log("replace", fullName.replaceAll("a", "iiii")); // replace all of a's


console.log("slice", fullName.slice(3, 10));
console.log("slice", fullName.slice(3, fullName.length));
console.log("slice", fullName.slice(3, fullName.length - 1)); //  slice is not used to often

const fullNameSlice = fullName.slice(1, fullName.length); // extracts the full name without index 0
console.log(fullName); // is not affected
console.log("slice", fullNameSlice); // the results of slice
console.log(fullName[7]); // space caracther
console.log(fullName.indexOf(" ")); // index of space












