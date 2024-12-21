// your code goes here


const seventh =(alpha) =>{
    const notAvaible = "This string is too short  ";
    const things = alpha;
    if(things.length >=6){
        return alpha[6];
    }
    else{
        return notAvaible;
    }
 

}


console.log("🚀 ~ seventh:", seventh("dfdaaad"))
