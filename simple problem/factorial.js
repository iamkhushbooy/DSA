const fact=(n)=>{
    if(n===0||n===1){
        return 1;
    }
    else{
        return n*fact(n-1);
    }

}
const a=5;
console.log(fact(a));