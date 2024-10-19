const { start } = require("repl");

const car = {

    brand: "Tata",
    model: "safari",
    start: function(){
        console.log("car started...");
    }
};

console.log(car.brand, car["model"])

//car.start();