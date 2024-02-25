let mode = document.querySelector(".mode");
let btn= document.querySelector(".btn");
let btnText=document.querySelector(".btn-text")
let light_icon=document.querySelector(".light-icon");
let dark_icon=document.querySelector(".dark-icon")
let flag=false;

light_icon.classList.add("hidden")

  const DarkMode= ()=>{
    if(flag){
        light_icon.classList.add("hidden")
        dark_icon.classList.remove("hidden")
        mode.classList.remove("dark")
        btnText.textContent="Dark Mode"
        flag=false;


        
    }
    else{
        dark_icon.classList.add("hidden")
        light_icon.classList.remove("hidden")
        mode.classList.add("dark")
        btnText.textContent="Light Mode"
        flag=true;

    }
   }
   