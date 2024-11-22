const HouseRent=function(rentAmount){

    this.rentAmount=rentAmount;
}


HouseRent.prototype.increment=function(){
    this.rentAmount+=1000;
}
const myHouse= new HouseRent(7000);

console.log(myHouse)
myHouse.increment()
console.log(myHouse)
