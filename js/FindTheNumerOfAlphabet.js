let words = ['apple', 'banana', 'avocado', 'cherry'];

const count = (arr,alphabet)=>{

    let totalCount = 0;
    for(let i =0; i<arr.length;i++){
        let word = arr[i];
                for (let j=0; j<word.length;j++){
                            if(word[j]===alphabet){
                                totalCount++
                            }
                }
    }
    return totalCount;
}



console.log( count(words,"p"));

console.log("git changes")