// data types stores in two type of memory

// ------  In Stack (Primitive)

let myGmail = "nidhi.roy@gmail.com";

let anotherGmail = myGmail;

anotherGmail = "nroy@gmail.com";

console.log(myGmail);
console.log(anotherGmail);

// --------  And   In Heap (Reference  or non Primitive)

let userOne = {
  name: "Nidhi",
  id: "1192",
};

let userTwo = userOne;

userTwo.name = "Neha";

console.log(userTwo);
