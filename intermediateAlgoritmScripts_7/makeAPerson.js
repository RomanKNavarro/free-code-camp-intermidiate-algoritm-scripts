const Person = function(firstAndLast) {
  let firstName = firstAndLast.split(' ').concat()[0];
  let lastName = firstAndLast.split(' ').concat()[1];    // THESE ARE PRIVATE PROPERTIES

  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.split(' ').concat()[0];
    lastName = firstAndLast.split(' ').concat()[1];
  };
};

let bob = new Person("Bob Saget");
console.log(bob.getFirstName());
console.log(bob.firstName);
bob.setFirstName("Haskell");
//bob.setFullName("Mail Chimp");
//console.log(bob.getFirstName());
console.log(bob.getFullName());

