const a = 11;
const b = 10;

console.log(a);
const n= 10;

if (a<b) {
    console.log("Code is not working");
}
else
{
    try{
        throw new Error("a is lesser than b");

    }
    catch(err){
        console.log("a");
    }
}