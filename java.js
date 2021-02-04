function hello(){
    console.log("Hello... , how are you?")

}

var sayBye= function bye(){
    console.log("Bye !!, Goodbye see you soon")
}

sayBye();


var list=["item1","item2","item3","item4"]
console.log(list[0]);

var num=[1,2,3,4]
var fun=[function bye(){console.log("apple bye");}, function chao(){console.log("apple chao");}]

var boolean=[true,true,false,true]
var mixed=[2,'string',false, function apple(){console.log("apple");}]

var list_holder=[num,fun,boolean,mixed]

list.shift();
list.pop();

list.push("item5");
list.concat(['item6', 'item7'])

var object={key1:'value',key2:2,key3:false}

var player={
    name:'Tendulkar',
    age:28,
    height:5.7,
    married:true,
    fields:['batting','bowling','fielding','wicket_keeping'],
    shout: function(){
        console.log("SHABA SHABA! TAKE IT EASY..")
    }
}

var fields= ['batting','bowling','fielding','wicket_keeping']

var object_holder= [{
    name:'Tendulkar',
    age:28,
    height:5.7,
    married:true,
    fields:['batting','bowling','fielding','wicket_keeping'],
    shout:function() {
        console.log("Shaba Shaba!!Take it easy");
    }
},

{
    name:'Kohli',
    age:24,
    height:5.8,
    married:false,
    fields:['batting','bowling','fielding','wicket_keeping'],
}]

var obj_empty={}
obj_empty.name='Aryamaan'

var obj_null=null


var database=[
{
    username:'Aryamaan',
    password:'pass1',

},
{
    username:"Mohsin",
    password:'pass2',
},
{
    username:"Smith",
    password:"pass3",
},
];

var newsFeed=[
    {
        username:'John',
        timeline:'Yeah I am so excited',
    },
    {
        username:'Tommy',
        timeline:'Yeah I am so tired',
    },

];

var userNamePrompt=prompt('Please enter your username');
var passwordPrompt=prompt('Please enter your password');

function ValidUser(user,pass){
    for (i=0;i<database.length;i++){
        if (database[i].username===user && database[i].password===pass)
        {
            return true
        }
        
    }
    return false;

}


function signIn(user,pass)
{
   for (i=0;i<database.length;i++){
       if (database[i].username===user && database[i].password===pass)
       {
           console.log(newsFeed);
       }
       else{
           alert("Sorry this is wrong credentials!")
       }
   }

//if(user === database[0].username && pass===database[0].password)
//{
//    console.log(newsFeed);
//}
//else
//{
  //  alert('Your credentials does not match!');
//}
}

signIn(userNamePrompt,passwordPrompt)


for (var i=0;i<=5;i++)
{
    console.log(i);
}

var reminder=[
    "wake up",
    "Brush teeth",
    "take shower",
    "Go to university",
    "Go to play",
];

for (var i=0;i<reminder.length;i++){
    console.log(reminder[i] + "Mohsin");
}

var counter=0;

while(counter<10){
    console.log(counter);
    counter++;
}

//do
var counter1=10;
do{
    console.log(counter1);
    counter1--;

}while(counter1>0)

//DOM selectors
document.getElementsByTagName("h1")
document.getElementsByClassName("second")
document.getElementById("first")
document.querySelector("h1")
document.querySelector("li")
document.querySelectorAll("li","h1")
document.querySelectorAll("li p")

document.querySelector("li").getAttribute("random")
document.querySelector("li").setAttribute("random","100")

document.querySelector("h1").style;
document.querySelector("h1").style.background="blue";

var h1=document.querySelector("h1");
h1.className="titleincsss"
document.querySelector("li").classList
document.querySelector("li").classList.add("styleincss");
document.querySelector("li").classList.remove("styleincss");
document.querySelector("li").classList.add("done")
document.querySelector("li").classList.toggle("done")
document.querySelector("h1").innerHTML="<strong>This is inner HTML</strong>";

document.querySelectorAll("li")[1];
document.querySelectorAll("li")[1].parentElement;
document.querySelectorAll("li")[1].parentElement.parentElement;
document.querySelectorAll("li")[1].parentElement.parentElement.childElement;
document.querySelectorAll("li")[1].parentElement.parentElement.children;

document.getElementsByTagName("button")

var button=document.getElementsByTagName("button")[0]
button.addEventListener("click",function(){
    console.log("User Clicked")
} )

button.addEventListener("mouseenter",function(){
    console.log("Mouse Entered")
} )

button.addEventListener("mouseleave",function(){
    console.log("Mouse Leave")
} )

var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function listelement(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode("New Job!"));
    ul.appendChild(li);
    input.value=""

}
button.addEventListener("click",function(){
    if (inputLength()>0){
    //console.log(input.value);
    listelement()
    }
    
})

input.addEventListener("keypress",function(event){
    if (inputLength()>0 && event.keyCode === 13){
    //console.log(input.value);
    listelement()
    }
    
})

var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");



body.style.background


console.log(css);
console.log(color1);
console.log(color2);

function colorChanger(){
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    //css.textContent=body.style.background+";";

}

color1.addEventListener("input",colorChanger)

color2.addEventListener("input",colorChanger)
    //console.log(color2.value);



//scope
window //parent scope
function b(){
    console.log("I am in root");
}
b()

function c(){
    var d="I am not accessible outside of this function."
    console.log(d);
}

var g="I am in root."
function gg(){
    var ee="I am in gg";
    console.log(g);
}

//Root scope window

var test_variable="test";

function test_variable_1(){
    //Child scope
    var test_variable="test_1";
    console.log(test_variable);
}

function test_variable_2(){
    //Child scope
    test_variable="test_2";
    console.log(test_variable);
}

function test_variable_3(){
    //Child scope
    test_variable="test_3";
    console.log(test_variable);
}


console.log(test_variable);
test_variable_1();
test_variable_2();
test_variable_3();
console.log(test_variable);

    
//Ternary operator
//conndition ? expression1 ! expression2

function isUserValid(bool){
    return bool;
}

var login= isUserValid(false) ? "Login success" : "Login denied";

var answer="your acoount is " + isUserValid(true) ? "blablaacoount" : "Not eixst";

function motion(direction){
    var move;
    switch(direction){

    
    
        case "up":
           var move="You are flying";
           break;
        case "down":
           var move="You are going down";
           break;
        case "right":
           var move="You are moving right";
           break;
        case "left":
           var move="You are moving left";
           break;
        
    }
    return move;
}

//let + const


const player="player1";
let life1=100;
let level1=true;

if(life1 >80){
    let level1=false;
    console.log('inside',level1)

}
console.log('outside',level1);

const player="player2";
let life2=100;
let level2=true;

if(life2 >80){
    var level2=false;
    console.log('inside',level2);

}
console.log('outside',level2);


//Destructure
const obj={
    a:"a",
    integer:10,
    bool:true,
}

const a=obj.a;
const integer=obj.integer;
let bool=obj.bool;

const {a,integer}=obj;
let {bool} =obj;

//Dynamic Property values,
const name="John Dovy";

const obj1={
    [name] : 'Good morning',
    [2+2] : 'This is foour'
}

const obj2={
    a:a,// a
    b:b,// b
}

//Template Strings
const name1="John";
const age1=23;
const city1='london';

const hello="This is" + name1 + "He is "+ age1 + "lives in "+ city1;

const hello3=`This is ${name1} he is ${age1} lives in ${city1}`;

function hello4(name1='Aryamaan',age1=45,city1='New York'){
      return `This is ${name1} he is ${age1} lives in ${city1}`;

}

// Arrow function

function sub2(a,b){
    return a-b;
}

const sub5= (a,b) =>{return a-b;}

function first(){
    var test="Hi";
    function second(){
        alert(test);
    }
    return second;
}
var thirdfun=first();
newFunc();

//Closure
const first=() =>{
    const test="Hi i am in first";
    const second=()=>{
        alert(test);
    }
    return second;
}

var thirdfun=first();
newFunc();

//Carrying
const fun1=(a,b)=>{
    a*b;
}
const carryfun1=(a)=>(b) => a*b;
const result=carryfun1(3)

//Compose
const compose=(fun1,fun2)=>(output)=>fun1(fun2(output));
const cube=(num)=>num*3;
compose(cube,cube)(3);

//Advanced Arrays
const array=[2,3,4,5,6];

const multiplied=[];
const newarray=array.forEach((num) =>{
    multiplied.push(num*2);

})

console.log(multiplied);

//map

const mapA=array.map((num)=>{
    return num*2;
})

console.log(mapA);

//filter
const filterA=array.filter(num=>{
    return num < 4;
})
console.log(filterA);

//reduce

const reduceA=array.reduce((accumulator,num)=>{
    return accumulator+num;

},0);//0 is starting point
console.log(reduceA);

//Advanced Objects
//reference type

var obj1={value:1};
var obj2=obj1;
var obj3={value:1};

//context
console.log(this===window)


//instantiation

class zombie{
        constructor(name,life){
        console.log(this);
        this.name=name;
        this.life=life;
    }
    introduce(){
        console.log(`Hi I am ${this.name} and I am ${this.life} healthy`);

    }
}

class big_zombie extends zombie{
    constructor(name,life){
    super(name,life)
    }


    roar(){
        console.log(`Aerererer i am ${this.name}`);
    }
}

const bigZombie1=new big_zombie('Balinka','fat');
const bigZombie2=new big_zombie('Dalinka','skinny');
const bigZombie1=new big_zombie('Talinka','bloody');

var a=3;
var b=a;
b+1;

let obj1={name:'johnny',password:'superdifficult'}
let obj2=obj1;
obj2.password='supereasy'

var arr23=[1,2,3];
var arr2311=[].concat(arr23);
arr2311.push(321211);

let obj1_new={key1:'value1',key2:'value2',key3:'value3'};
let obj2_new=Object.assign({},obj1);
obj2_new.key3='value4'
let obj3_new={...obj1};

//type coercion
1==1
1==2
1=='1'//true-type coercion
1==='1'//false - compare no permission for type coercion

//ES7& 8 updates
'A quick Brown fox'.includes('fox')//boolean value
my_list=['one','two','three'];
my_list.includes('one')
my_list.includes('two')
my_list.includes('1')
const cube=(y)=>y**3//for power
cube(3);

'asasa'.padStart(100)
'asasasa'.padEnd(100)

let obj={
    username_1:'John',
    username_2:'Kiki',
    username_3:'Nini',
}
Object.keys(obj).forEach((key,index)=>{
         console.log(key,obj[key]);
})
Object.values(obj).forEach(value=>{
    console.log(value);
})

Object.entries(obj).forEach(value=>{
    console.log(value);
})


//ES10 updates
const Array_1=['a',['b','c'],['d','e']]
Array_1.flat()

const Array_1=['a',['b','c'],['d',['e']]]
Array_1.flat(2)//flatten the array upto 2 layers
const data_1=['data1','data2',,,,,'data3']
data_1.flat()//for data cleaning no null values


const email='      myemail@gmail.com'
const email2='youremail@gmail.com         '
console.log(email.trimStart())
console.log(email2.trimEnd())

var a=2;
var b=3;
a+b
var a='blabla'
a+b
try{
    a+c
}    catch{
    console.log('One of the Variable is not defined')

    }


//Advanced loops
const list=['item1','item2','item3']

for(let i=0;i<list.length;i++){
    console.log(list[i]);
}

for(item of list){
    console.log(item);
}

objecto={
    key:1,
    key2:2,
    key3:3,
}
//enumerate
for(keys in objecto){
    console.log(keys);
}

const items=['item1','item2','item3','item4']

for(item of items){
    debugger;
    console.log(item);
}


//memory allocation
//parse and execute
console.log('1')
setTimeout(() => {console.log('2')},3000)
console.log('3')