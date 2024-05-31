const user = {
    userName : "Atul",
    price  : 999,
    welcomeUser : function(){
        console.log(`${this.userName},welcome to website`);
    }
}
user.welcomeUser()


// function chai(){
//     console.log(this);
// }
// chai()
// const chai=function (){
//     let userName = "Atul"
//     console.log(this.userName);
// }
const chai = () =>{
    let userName = "Atul"
    console.log(this.userName);
}
chai()
// Arrow function
const hello = (num1,num2) =>{
    return(num1+num2)
}
console.log(hello(3,5));

const addTwo = (num1,num2) =>num1+num2 // implict return
console.log(addTwo(4,5));