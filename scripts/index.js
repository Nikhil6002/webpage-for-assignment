
document.addEventListener("DOMContentLoaded", function() {

  document.onkeydown = checkKey;
});

const checkKey = (e) => {
  e = e || window.event;
  if (e.keyCode == '82') {
    alert('Open console to see the magic 🌈');
    rainbow();
  }
}

  /*
      _.-""""`-._ 
    ,' _-""""`-_ `.
    / ,'.-'"""`-.`. \
  | / / ,'"""`. \ \ |
  | | | | ,'"`. | | | |
  | | | | |   | | | | |

  RAINBOW EASTER LOG 
  */

 const rainbow = () => {
  let x = 1;
  let up = !1;
  setInterval(() => {
    (75 === x || 1 === x) && (up = !up), up ? x++ : x--, console.log(`%c${`■`.repeat(x)}`, `color: hsl(${2*x}, 100%, 50%)`)
  }, 15);
};

function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;
}
