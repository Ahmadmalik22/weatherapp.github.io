const date=document.querySelector(".date")
const city_head=document.querySelector(".city_name")
const input=document.querySelector(".input")
const search=document.querySelector(".saerch-icon")
const temperature=document.querySelector(".temp")
const feel=document.querySelector(".feels")
const humi=document.querySelector(".humi")
const pre=document.querySelector(".pre")
const wind=document.querySelector(".wind")
const max=document.querySelector(".max")
const img=document.querySelector("#clouds")
const clear=document.querySelector(".clear")

let api_url="https://api.openweathermap.org/data/2.5/weather?q="
const apikey="&appid=087c555ba304e72af441ad00d9c70cfa";
var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


console.log()
//funtion call
async function get(){
    let city=input.value;
    getcurrendate();
let data=await fetch(`${api_url}${city}${apikey}&units=metric`)
let jsondata=await data.json();
city_head.innerHTML=jsondata.name;

let temp=Math.floor(jsondata.main.temp);
let f=Math.floor(jsondata.main.feels_like);
let h=Math.floor(jsondata.main.humidity);
let p=Math.floor(jsondata.main.pressure);
let w=Math.floor(jsondata.wind.speed);
let m=Math.floor(jsondata.main.temp_max);
max.innerHTML=m
wind.innerHTML=w
pre.innerHTML=`${p}`
humi.innerHTML=`${h}`
temperature.innerHTML=`${temp}<sup>o</sup>`
feel.innerHTML=`${f}<sup>o</sup>`
input.value=" ";
let a= jsondata.weather[0].main;
if(a=="Clouds"){
    img.setAttribute("src","clouds.png")
    clear.innerHTML="Clouds"
}
else if(a=="Clear"){
    img.setAttribute("src","clear.png")
    clear.innerHTML="Clear"
}
else if(a=="Mist"){
    img.setAttribute("src","mist.png")
    clear.innerHTML="Mist"
}
else if(a=="Rain"){
    img.setAttribute("src","rain.png")
    clear.innerHTML="Rain"
}
else if(a=="Drizzle"){
    img.setAttribute("src","drizzle.png")
    clear.innerHTML="Drizzle"
}

}





 search.addEventListener("click",get)


const getcurrendate=()=>{
let now = new Date();
let d=now.getDate();
let day=now.getDay();
let month=now.getMonth()+1;
let year= now.getFullYear();
date.innerHTML=`${week[day]} ${d} | ${month} | ${year} `
}
