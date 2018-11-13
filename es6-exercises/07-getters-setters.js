// Our cash register has a few serious problems

var register = {
  balance: 0,
  deposit: function(value){
    this.balance += value
  },
  withdraw: function(value){
    this.balance -= value
  }
}

// Anyone can directly update their balance without a withdraw/ deposit:

register.balance = 100000

// The balance can be manipulated with unsanitized input:

register.deposit(1)
register.deposit("0")
register.deposit("00000")
register.balance

// update the register object to use getters and setters. Throw an error
// if the user sets a value that is not a positive

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

const register = {
  balance: 0,
  set deposit (value) {
    if (value < 0)
      throw new Error ("Cant deposit negative!");

    return register.balance += value;
  },
  set withdraw (value) {
    return register.balance -= value;
  },
  get currentBalance () {
    return `${this.balance}`;
  }
}

// Anyone can directly update their balance without a withdraw/ deposit:

// register.balance = 100000

// The balance can be manipulated with unsanitized input:

register.deposit = 1;
register.deposit = 100;
register.deposit = -105;
// register.deposit("00000")
console.log(register.currentBalance)

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//example of getter & setter

// const person = {
//   firstName: 'Andrew',
//   lastName: 'Foster',
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`
//   },
//   set fullName(value) {
//     const parts = value.split('');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// person.fullName = 'Andrew Foster'

// console.log('person');











