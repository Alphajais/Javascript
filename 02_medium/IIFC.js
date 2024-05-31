// # Immediatly invoked function call
(function chai(){
    // name IIIFE
    console.log(`DB connected`);
})();
// chai()
((name) => {
    console.log(`DB conneccted ${name}`);
})('Atul')