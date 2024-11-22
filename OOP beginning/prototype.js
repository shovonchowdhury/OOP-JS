
Array.prototype.filter=function(){
    let arr=[];
    for(let i=0;i<this.length;i++)
    {
        if(this[i]%2)
        arr.push(this[i]);
    }

    console.log(this);

    return arr;
}


const array=[8,9,6,7,9,3]
console.log(array.filter());