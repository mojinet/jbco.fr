var navIco = document.getElementById("main_nav-icone");
var navM = document.getElementById("smart_nav");

// event sur hamburger menu icone
navIco.addEventListener("click",function(){
    if(navM.classList.contains("openNav")){
        navM.classList.remove("openNav")
    }else{
        navM.classList.add("openNav")
    }
})

//event sur le menu nav
navM.addEventListener("click",function(){
    navM.classList.remove("openNav")
})