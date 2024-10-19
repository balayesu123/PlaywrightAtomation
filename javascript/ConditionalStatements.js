let age = 20;

if(age>=18)
{
    console.log("Eligible for vote");
}
else
{
    console.log("Not Eligible for vote");
}


let day=3;

switch(day)
{
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default : console.log("Incorrect Value");

}


let a="8";  // string
let b=8;    // number

if(a==b)
{
    console.log(" == is for Checking the values only not datatype")
}
else{
    console.log("value incorrect")
}

if(a===b)
    {
        console.log(" === is for Checking the values and also datatype")
    }
    else{
        console.log("incorrect datatype")
    }


    // Ternary operator

    const value = false;

    const res = value ? 10 : 20;

    console.log(res);