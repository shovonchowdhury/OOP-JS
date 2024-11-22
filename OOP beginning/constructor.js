function createUser(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

createUser.prototype.getBirthYear=function(){
    return new Date().getFullYear() - this.age;
}

user1=new createUser('shovon','chy',25);

