const arr1=[1,2,10,3,4,10,4,3,2]

const arr2=[17,2,22,3,4,10,43,3,21]
 
const arr3 = [...arr1,...arr2]
console.log("🚀 ~ arr3:", arr3)

const sortedArray = arr3.sort((a,b)=>(b-a));
console.log("🚀 ~ sortedArray:", sortedArray)


 
let p = 2;
p += ++p + p++ + p;
console.log(p);