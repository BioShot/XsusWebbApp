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

function CreateKey(name,username,place){
    var ints = Math.random(1) *3 / 2 + 6
    var substing = name.split(3) + 'su&!'
    var b = 'bit' + ints + 'array'
    var bitencode = 32+b
    var currentdate = new Date()
    var ApiCTL = "1::api"
    var keyname = username.split(' ') + '3' + Math.random().toFixed() +'$A::'+ username.split(5) + '#'
    var message = "APIKEY:@"
    var placeEncode = place.split('32') + '$[PID]?'
    var Data = message + ints + 'si{uuid}:' + substing + '$' + bitencode + 'Cdate%$' + currentdate + 'ApiCTL@' + ApiCTL + 'KKNME%' + keyname + 'PPENCODE$' + placeEncode
    setCookie(".APIKEY",Data)
    document.getElementById('status').textContent = "Success!"

}
const results = ""
        new URLSearchParams(window.location.search).forEach((name,username,place) => {
        CreateKey(name,username,place)
            
}

)