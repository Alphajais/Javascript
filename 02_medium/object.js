
const mySym = Symbol ("key1")


const Name =  {

    name : "Atul",
    [mySym] : "key1",
    age : "25",
    isloggedIn : false,
    "full name" : "Atul Jaiswal"
}
console.log(Name["full name"]);
console.log(Name["age"]);
console.log(typeof[mySym] );

Name.greeting= function(){
    console.log("Hello Jsuser");
}
Name.greetingTwo = function(){
     console.log(`hello js user,${this.name}`);
}
console.log(Name.greeting());
 console.log(Name.greetingTwo());




