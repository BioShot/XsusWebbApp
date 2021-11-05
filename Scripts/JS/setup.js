function setCookie(name,value) {
    document.cookie = name + "=" + value + "" + ";path=/";
}
function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(cname) == 0){
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function jojo(){
    var body = document.getElementById("body")
    body.style.backgroundImage = "url('/API/iframes/speedrun.gif')"
    body.style.backgroundSize = "cover"
    console.log("speedrunner boi...")
    setCookie("speedrunner",true)
    setCookie("glcContent","${}:Shttps()26w??/spee/Erun+_+_ht.js")
    setCookie("name","_(JOJOSPEEDRUNRAINBOWTAGS)")
    document.title = "SUPERJOJOANDDWEAMREFRENCE__MC"
}
const results = ""
        new URLSearchParams(window.location.search).forEach((username) => {
           
            if(window.location.search == "?color=green;token=speedrun;color=rainbow;token=JOJO;keyword=Zaworldo"){
                setTimeout(jojo,100)
            }else{
            setCookie('name',username)
            document.createElement('p').textContent = "Redirecting...";
            setTimeout(document.location.assign('http://127.0.0.1:5500/Portal.html'),1000)
}


}
)