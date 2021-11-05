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
function change_name(){
    if (getCookie("name")){
        console.log("logged in.")
        const Name = getCookie("name");
        const page_header = document.getElementById("header")
        page_header.textContent = 'Welome '+ Name +'!'
    }else{
    const page_header = document.getElementById("header")
    const Name = prompt("Name: ")    
    page_header.textContent = 'Welome '+ Name +'!'
    console.log(Name)
    setCookie("name",Name)
  }
}

document.addEventListener("DOMContentLoaded",change_name,false)
