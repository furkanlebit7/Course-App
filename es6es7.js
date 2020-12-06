//       Modern Javascript Teknikleri - ES6+ / ES7         //





/***********************************************************/





/*                      ARROW FUNCTİONS                    */

/*
//ES5   

    let welcomeES5 = function(){
        console.log("Hello from ES5");
    };
 

    welcomeES5();
//ES6   

    let welcomeES6 = () => {
        console.log("Hello From ES6");
    }

    welcomeES6();






//ES5

    let multiplyES5 = function(x,y){
        return x*y;
    }

   console.log(multiplyES5(5,10));
//ES6

  //let multiplyES6 = (x,y) => {return x*y};
    let multiplyES6 = (x,y) => x*y; 
//iki kullanımda aynıdır paranez  kullanılucaksa return verilmek zorunda 
    console.log(multiplyES6(5,6));




//ES5

    let splitES5 = function(text){
        return text.split(" ");
    }
console.log(splitES5("Mevlüt Furkan Lebit"));
//ES6

    let splitES6 = text =>text.split(" ");
    console.log(splitES6("Mevlüt Furkan Lebit"));






//Object Literals

//ES5

    let getProductES5 = function(id,name){
        return{
            id : id,
            name : name,
        }
    }
console.log(getProductES5("32543667","Samsung Note 20"));
//ES6
    let getProductES6 = (id,name) => (
        {
            id : id,
            name : name,
        }
    );
console.log(getProductES6("5967544","Iphone X Max S"));



const phones = [
    {name : "Xiaomi Mi6", price :1000},
    {name : "Xiaomi Mi7", price :2000},
    {name : "Xiaomi Mi8", price :3000},
    {name : "Xiaomi Mi9", price :4000},
];
//ES5
let priceES5 = phones.map(function(phone){
    return phone.price;
})
  console.log(priceES5);
//ES6
let pricesES6 = phones.map(phone => phone.price);
console.log(pricesES6);



const arr = [1,4,7,14,42,87,98,111,134,157,171]

//ES5
    let evenES5 = arr.filter(function(a){
        return a%2==0;
    })
console.log(evenES5);
//ES6
    let evenES6 = arr.filter(a=>a%2==0);
console.log(evenES6);
*/


/*
// this KEYWORD
//ES5
let listES5 = {
    cagtegory : "phone",
    names : ["Ihpne 8 ", "Samsung S8 ","Xiaomi Mi8"],
    call : function(){
            var self = this ;
            this.names.map(function(name){
                console.log(`${self.cagtegory} ${name}`);
            
        })
    }
}
listES5.call();

//ES6
let listES6= {
    cagtegory : "phone",
    names : ["Ihpne 8 ", "Samsung S8 ","Xiaomi Mi8"],
    call : function(){
            this.names.map((name)=>{
                console.log(`${this.cagtegory} ${name}`);
            
        })
    }
}
listES6.call();
*/

/*
function Game(){
    this.live = 0;
    this.addLive = function(){
        this.oneUp = setInterval(()=>{
            console.log(++this.live)
        },1000)
    }
}
let player = new Game();
player.addLive();
*/





/***********************************************************/





//                    SPREAD OPERATOR                      //


/*
function getTotal(a,b,c){
    return a+b+c;
}

let numbers = [10,20,30];


//ES5
console.log(getTotal.apply(null,numbers));
//ES6
console.log(getTotal(...numbers));

*/



/***********************************************************/






//                   REST PARAMETERS                       //
/*
//ES5
function sumES5 (){
    let arr = Array.prototype.slice.call(arguments);
    let result = 0;
    arr.forEach(function(item){
        result+=item;
    });
    return result;
}
console.log(sumES5(10,20,30));

//ES6
function sumES6(...arr){
    let result =0;
    arr.forEach(item=>result+=item);
    return result;
}
console.log(sumES6(10,20,30));


//ES6
function isDriver(age,...years){
    years.forEach(year => console.log(2018-year>=age))
}

isDriver(17,2010,1998,1978,1999,2001,2004);

//burada yaş sınırlamasını başa yazıyoruz kı kalan butun girdileri years kısmına alsın diye 
*/


/***********************************************************/









//                    DESTRUCTURİNG                       //

/*
//Destructing Assignment
[a,b,...rest] = [10,20,30,40,50,60];
console.log(a);
console.log(b);
console.log(rest);
//dizi olarak aldık

({a,b,...rest} = {a:10,b:20,c:30,d:40,e:50});
console.log(a);
console.log(b);
console.log(rest);
//obje olarak aldık


//Array Destructring 
const arrConfig = ["localHost","8080","900"];
//ES5
var server = arrConfig[0];
var port = arrConfig[1];
var timeout = arrConfig[2];
console.log(server,port,timeout);

//ES6
const[server6,port6,timeout6] = arrConfig;
console.log(server6,port6,timeout6);

//Object Destructuring

const objConfig ={
    serverobj : "localhost",
    portobj : "8080",
    timeoutobj : "900"
}
//ES5
var serverobj5 = objConfig.serverobj;
var portobj5 = objConfig.portobj;
var timeoutobj5 = objConfig.timeoutobj;
console.log(serverobj5,portobj5,timeoutobj5);
//ES6
const {serverobj6,portobj6,timeoutobj6} = objConfig;

console.log(serverobj6,portobj6,timeoutobj6);
*/


 

/***********************************************************/




//                   ES6 CLASS KULLANIMI                   //
/*
//ES5
var PersonES5 = function(name,job,yB){
    this.name = name;
    this.job = job;
    this.yB = yB;
}

PersonES5.prototype.calculateAge = function(){
    return 2020-this.yB;
}

var yigit = new PersonES5("yigit","teacher",1998);

console.log(yigit);
console.log(yigit.calculateAge());

//ES6

class PersonES6{
    constructor(name,job,yB){
        this.name=name;
        this.job = job;
        this.yB=yB;
    }

    calculateAge(){
        return 2020-this.yB;
    }
}

var emel = new PersonES6("emel","architect",1974);
console.log(emel);
console.log(emel.calculateAge());
*/

//Static Methods
/*
class PersonES6{
    constructor(name,job,yB){
        this.name=name;
        this.job = job;
        this.yB=yB;
    }

    calculateAge(){
        return 2020-this.yB;
    }

    static sayHi(){
        console.log("Hello there");
    }
}

var emel = new PersonES6("emel","architect",1974);
console.log(emel);
console.log(emel.calculateAge());

PersonES6.sayHi();


class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x -b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);
    }

}

const d1 = new Point(25,40);
const d2 = new Point(13,30);


console.log(Point.distance(d1,d2));
*/







//                   SUB CLASS KULLANIMI                   //





































