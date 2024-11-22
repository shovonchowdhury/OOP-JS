class Computer{
     #warrenty
    constructor(name,model,warrenty){
        this.name=name;
        this.model=model;
        this.#warrenty=warrenty;
    }

    aboutComputer(){
        console.log(`This is ${this.name} computer & model is ${this.model}`);
        this.#aboutWarrenty();
    }

    #aboutWarrenty(){
        console.log(`The Warrenty is ${this.#warrenty}`)
    }
}

const lenovo=new Computer('lenovo','de5',2);

console.log(lenovo.model)
lenovo.aboutComputer();