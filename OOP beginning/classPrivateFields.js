class createUser{

    #age
    constructor(firstName,lastname,age){
        this.firstName=firstName;
        this.lastname=lastname;
        this.#age=age;
    }

    #hi = "Hello World";
    getBirthYear(){
        console.log(this.#hi)
        console.log(this.#getFullName())
        return new Date().getFullYear() - this.#age;
    }
    #getFullName(){
        return this.firstName+' '+ this.lastname;
    }
}


const user1= new createUser('shovon','chowdhury',25);