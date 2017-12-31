console.log("Starting app!");

setTimeout(() => {
    console.log("insinde callback!");
}, 2000);

setTimeout(()=>{
    console.log("Second callback");
},0);
console.log("Finsishing up");