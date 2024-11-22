class Computer{
    constructor(name,model){
        this.name=name;
        this.model=model;
    }

    aboutComputer(){
        console.log(`This is ${this.name} computer & model is ${this.model}`);
    }
}

class Hp extends Computer{
    constructor(name,model,warrenty)
    {
        super(name,model);
        this.warrenty=warrenty;

    }


    aboutWarrenty(){
        console.log(`And its warrenty is ${this.warrenty}`)
    }
}

const hp= new Hp('Hp','md55','1yr');

hp.aboutComputer();
hp.aboutWarrenty();