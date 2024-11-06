let names ="Lavesh";
let num = 10;
let he = false;
let arr = [1,2,3,4];
console.log(names,num,he,arr);



function greet(name){
    console.log("Hello" + name);
}
let msg = greet("Lavesh");

function chck(age){
    if(age>=18){
        console.log("Adult");
    }
    else{
        console.log("Not Adult");
    }
}
let age = chck(12);


function summ(nume){
    let ans = 0;
  for(let i = 1; i<=nume; i++){
     ans = ans + i;
  }
  console.log(ans);
}
let numm = summ(100);

function greet(user){
    console.log("Hello "+user.gender + " "+ user.name +" "+ "Your age is" + " "  + user.age)
    if(user.age >18){
        console.log("Can vote");
    }
    else{
        console.log("Not");
    }
}

let user = {
    name:"Lavesh",
    age:23,
    gender:"Mr"
}

greet(user);

function chck(users){
    for(let i =0; i<users.length; i++){
    if(users[i].age>18){
        console.log(users[i].name);
    }
    else{
        console.log("error");
    }
}
}

let users = [
    {
        name:"Lavesh",
        age:17
    },
    {
        name:"Lucky",
        age:23
    }
]

chck(users);

function chck(users){
    for(let i =0; i<users.length; i++){
        if(users[i].age>18 && users[i].gender==="male"){
            console.log(users[i].name);
        }
       
    }
}
let userss =[ {
    name:"lavesh",
    age:19,
    gender:"male"
},
{
    name:"sheela",
    age:20,
    gender:"Female"
}]
chck(users);