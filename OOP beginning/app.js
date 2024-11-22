const Computer=function(name,model){
    this.name=name;
    this.model=model;
}

Computer.prototype.aboutComputer=function(){
    console.log(`this computer name is ${this.name} and the model id ${this.model}`);
}
const lenovo= new Computer('lenovo','s20');
console.log(lenovo);
lenovo.aboutComputer();

console.log(lenovo)