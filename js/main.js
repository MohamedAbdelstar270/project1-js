/* document.getElementById("example").innerHTML="hello from external file";

 document.getElementById("example").style.color="Red";

 document.getElementById("example").style.textAlign="center";*/


 // var x =document.getElementById("kian");
// x.innerHTML = "hello world!";
// x.style.color = "red";
// x.style.textAlign = "center";

// var e =5;  //number
// var z = "ahmed"; //string 
// var b = "30"; //string 
// var y = true;  //boolean
// var w = 4.2; //number


// var names = ["ahmed",true,6.4,89];

// console.log(names[30]);
// var y ;
// var g =null;


// console.log(g);

// var person = {
//         firstName :"ahmed",
//         isAdmin : true,
//         salary : 6.4,
//         weight : 89    
//     }


//     console.log(person.weight);
//     console.log(person["salary"]);
    // var x =5; 
    // var y = "5";
    // console.log(x===y);
    // var x =null;
    // console.log(typeof x);


//function   ==> block of statment 


// function getData (a,b){

//     return a-b;
// }



// console.log(getData("zaki",4));

var counter = 0;

function increment(){
    counter++;
    document.getElementById('demo').innerHTML= counter;
}

function decrement(){
    counter--;
    document.getElementById("demo").innerHTML = counter;
}

function reset(){
    counter =0;  
    document.getElementById("demo").innerHTML =counter;
}


// var x = prompt("what is the price of product?");

// if(x>20){
//     alert("expensive");
// }else if(x==20){
//     alert("cool");
// }else if(x<20){
//     alert("cheap");
// }else{
//     alert("Not A Number");
// }








// var x = prompt("Who is the winner fifa world cup 2022");

// switch(x){
//     case "France" :{
//         alert("outdoor from Final Match");        
//         break;
//     }


//     case "Maracoo" : {
//         alert("out door from semi final");
//         break;
//     }

//     case "Brazil" : {
//         alert("out door");
//         break;
//     }
    

//     default :{
//         alert("Argantina is the winner of fifa world cup 2022");

//     }

// }



//string method 

// var x = "Hello WorlD!";

// alert(result);

// var result = x.charAt(4);
// var result = x.trim();
// var result = x.toLowerCase();
// var result = x.toUpperCase();
// var result = x.replace(/world/ig,"kian");
// var result = x.substr(6,5);
// var result = x.substring(6,11);
// var result = x.slice(-15,-10);
// var result = x.lastIndexOf("z");
// var result = x.indexOf("l",4);
// var result = x.length;


//global scope   local scope  



// function get(){
//     var x =15;
//     var y =20;
//     return x +y;
// }

// document.getElementById("kian").innerHTML = get();



// var person = {
//     firstName :"ahmed",
//     isAdmin : true,
//     salary : 6.4,
//     weight : 89    
// }
// person.firstName = "mahmoud";

// console.log(person.firstName);