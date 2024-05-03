//Random password generator  (in future full html & css will be          
//                             implemented)




function generatePassword() {
    const passwordLength = document.getElementById("lengthOfPassword").value;
 
    const includeSymbols = document.getElementById("checkIncludeSymbols").checked;
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*(){}[]=<>/,._";
    const result = document.getElementById("generatedPassword");

    let includedChars = "";
    let password = "";

    includedChars +=  lowercaseChars ;
    includedChars +=  uppercaseChars ;
    includedChars +=  numberChars ;
    includedChars += includeSymbols ? symbolChars : "";
    for(let i =0;i<passwordLength;i++){
      const randomIndex = Math.floor(Math.random()*includedChars.length);
      password+= includedChars[randomIndex];
    }

    passwordLength >= 1 ?result.textContent = `Generated Password : ${password}`: window.alert( "password length must be atleast 1");;

    window.reload();
}



