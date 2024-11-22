
// const getBirthYear=()=>{
//     return new Date().getFullYear() - this.age;

//     // console.log(this)
// }

const createUser=(firstname,lastname,age)=>{

    const user={
        firstname,
        lastname,
        age,
        // getBirthYear,
        greet1:()=>{
            console.log('greeting 1',this.age);
            console.log(this);
            
        }
    }

    return user;
}

const user1=createUser('shovon','chowdhury',25);
