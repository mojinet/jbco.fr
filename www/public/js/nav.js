/*********************** */
/*          MENU         */ 
/*********************** */
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

/*********************** */
/*        Switch         */ 
/*********************** */
var switchContainerElm = document.getElementById("switch_container");
var sunElm = document.getElementById("switch_sun");
var moonElm = document.getElementById("switch_moon");
var switchElm = document.getElementById("switch_theme");
var competenceElm = document.getElementById("competences");
var avatarWElm = document.getElementById("competence_avatar_W");
var avatarBElm = document.getElementById("competence_avatar_B");

switchContainerElm.addEventListener("click", function(){
    if (switchElm.classList.contains("switch_push")){
        switchElm.classList.remove("switch_push");
        moonElm.classList.remove("display_none");
        sunElm.classList.add("display_none");
        competenceElm.classList.remove("l_competencesW")
        avatarWElm.classList.remove("display_none");
        avatarBElm.classList.add("display_none");
        switchContainerElm.classList.remove("switch_black");
        switchElm.classList.remove("switch_black");
        document.getElementById("gearB").classList.add("display_none")
        document.getElementById("monitorB").classList.add("display_none")
        document.getElementById("paletteB").classList.add("display_none")
        document.getElementById("conceptB").classList.add("display_none")
        document.getElementById("gearW").classList.remove("display_none")
        document.getElementById("monitorW").classList.remove("display_none")
        document.getElementById("paletteW").classList.remove("display_none")
        document.getElementById("conceptW").classList.remove("display_none")
        
    }else{
        switchElm.classList.add("switch_push");
        moonElm.classList.add("display_none");
        sunElm.classList.remove("display_none");
        competenceElm.classList.add("l_competencesW")
        avatarWElm.classList.add("display_none");
        avatarBElm.classList.remove("display_none");
        switchContainerElm.classList.add("switch_black");
        switchElm.classList.add("switch_black");
        document.getElementById("gearB").classList.remove("display_none")
        document.getElementById("monitorB").classList.remove("display_none")
        document.getElementById("paletteB").classList.remove("display_none")
        document.getElementById("conceptB").classList.remove("display_none")
        document.getElementById("gearW").classList.add("display_none")
        document.getElementById("monitorW").classList.add("display_none")
        document.getElementById("paletteW").classList.add("display_none")
        document.getElementById("conceptW").classList.add("display_none")
    }
})