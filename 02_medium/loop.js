//  syntax variable.forEach ( finction name ( )= {console.log()})
const myCoding  = [
    {
     langName : "javascript" , 
     languageFile : "js"
    },
    {
        langName : "java" , 
        languageFile : "j"
       },
       {
        langName : "cpp" , 
        languageFile : "c++"
       }
]
myCoding.forEach ( (item) => 
{
    console.log(item.langName);
})