let words = ['apple', 'banana', 'avocado', 'cherry'];
 //random Array 

 const countAlphabets= (words)=>{
    let counting = 0;
    for(let i =0 ; i<words.length;i++){
            const word = words[i]
            for(let j=0 ;j<word.length;j++){
               if(word[j]==="c"){
                counting=counting+1;
               }
            }
    }
    return counting
 }
console.log( countAlphabets(words));

