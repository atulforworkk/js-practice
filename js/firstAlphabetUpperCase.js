const myString = "hlo zeus "

    const letFirstAlphabetUpperCase = (str)=>{
        const stringUpperCase =str[0].toUpperCase();
        let concatedString = str.substring(1);
        const finalString = stringUpperCase+concatedString;
        return finalString;
    }


    console.log(letFirstAlphabetUpperCase(myString));
 

