class createUser{

    constructor(firstName,lastname,age){
        this.firstName=firstName;
        this.lastname=lastname;
        this.age=age;
    }
    getBirthYear(){
        return new Date().getFullYear() - this.age;
    }
    getFullName(){
        return this.firstName+' '+ this.lastname;
    }
}


// createUser.prototype.getBirthYear=function(){
//     return new Date().getFullYear() - this.age;
// }

const user1= new createUser('shovon','chowdhury',25);