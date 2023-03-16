/////////////////////////////////////////////////////////////////////////////////1-100
let t1=0;
function toplam1(){
    for(let i=1;i<=100;i++){
        console.log(i+".sayı");
        t1+=i;
    }
    console.log("toplam:"+t1);
}

/*module.exports={
    toplam1
}*/
/////////////////////////////////////////////////////////////////////////////////1-100 tek
let a=0;
let t2=0;
function toplam2(){
    while(a<=100){
        if(a%2==1){
            console.log(a);
            t2+=a;    
        }
        a++
    }
    console.log("toplam:"+t2);
}
/*module.exports={
    toplam2
}*/

/////////////////////////////////////////////////////////////////////////////////1-100 çift
let b=0;
let t3=0;
function toplam3(){
    while(b<=100){
        if(b%2==0){
            console.log(b);
            t3+=b;    
        }
        b++
    }
    console.log("toplam:"+t3);
}

/*module.exports={
    toplam3
}*/



module.exports={
    toplam1,toplam2,toplam3
}




















/*
//////////////////////////////1-100 toplam
let toplam=0;
for(let i=1;i<=100;i++){
    console.log(i+".sayı");
    toplam=toplam+i;
}console.log("toplam:"+toplam);
//////////////////////////////tek sayılar
let i=0;
let toplam=0;
while(i<=100){
    if(i%2==1){
        console.log(i);
        toplam+=i;    
    }
    i++
}
console.log("toplam:"+toplam);
*/

/*const funs = require("./fun");
funs.soru4();*/