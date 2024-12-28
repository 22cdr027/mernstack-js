/*let a=15
if(a%3==0 && a%5==0)
{
    console.log("Hi Hello")
}
else if(a%5==0)
{
    console.log("Hello")

}
else if(a%3==0)
{
console.log("Hi")
}
*/

/*let a=2
switch(a)
{
    case 1:
        console.log("hi every one")
        break;
    case 2:
        console .log("hi hariharan")
        break;
    default :
        console.log("nothing")        


}
        

for (let x = 2; x <= 4; x++)
{
    console.log("Value of x:" + x);
}
 for(var a=1;a<100;a++)
 console.log("hi");
 console.log(a)
 

 let a=5
  do
 {
    console.log(a)
    a++
 }while(a>=10)
 
 let sub = (a,b) =>{
    console .log(a-b)
 }
 sub(3,4);



 let add = (a,b) =>{
    return a+b;
 }
 console. log(add(20,7));


let a = [10, 20];
let b = [...a, 30, 40];
console.log(b);


function spreadh(a,x)
{
    let c=[...a,...x];
    console.log(c)

}
let a=[1,2,3]
let b=[4,5,6]
spreadh(a,b)


function restape(x,...values)
{
    console.log(values);
}
restape(1,2,3,4,5,6,7)


let a = {
    name:"hari",
    age:20,
    address:"gandhi nagar",
    district:"sivaganga",
};
let {name,age}=a
console.log(name);
let a{
    name:"hh"
    age=45
}

   //callback

   function dog(cat)
   {
    setTimeout(()=>{
        console.log("jack is daog");
        cat();
    },2000);
   }
   function cat()
   {
    console.log("rose");
   }
   dog (cat)
 

   function attendance(lunch)
   {
    setTimeout(()=>{
        console.log("100% attendance");
        lunch();
    },2000);

   }
   function lunch(gohome)
   {
    setTimeout(()=>{
        console.log("have ur Lunch")
        gohome();

    },5000);
   }
   function gohome()
   {
    console. log("Day is completed");
   }
   attendance(()=>{
    lunch(()=>{
        gohome()
    });
});



 // promise
 function attendance(){
 return new Promise((resolve, reject)=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  setTimeout(()=>{
    let attend=false
    if(attend){
      resolve("100% attendance");
    }
    else
    {
        reject("not present");
    }
    
  },2000);

 
})
 }
 attendance().then(op=>console.log(op))
 .catch(op=>console.error(op));

 

 //asynchronous

 function attendance()
 {
    return new Promise((resolve, reject)=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        setTimeout(()=>{
          let attend=true
          if(attend){
            resolve("100% attendance");
          }
          else
          {
              reject("not present");
          }
          
        },2000);
      })
      
 }
 
 async function d()
 {
    try{
        let a= await attendance();
        console.log (a);
    }
    catch(error) 
    {
        console.error(error)
    }
 }
 d()
 */

 function attendance(a,lunch)
   {
    console.log("my file "+a+" is being processed");
    console.log("my file "+a+" is being download")
    lunch() 
    }
   function lunch()
   {
    setTimeout(()=>{

        console.log("file is downloaded")
    },2000)
   }
   
   let a="abc"
   attendance(a,lunch)
 