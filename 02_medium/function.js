function addtwonumber (num1,num2){
    let done  = num1 + num2
    return done 
}
const result = addtwonumber(3,5)
 console.log(result);
// ####
function loginUserMessage (username){
    return `${username}justlogin window`
}
console.log(loginUserMessage("username"));

function justlogin(password){
    if(password == undefined){
       console.log( "pls enter the name");
    }
    return `${password} ok=> bye`
}
console.log(justlogin());