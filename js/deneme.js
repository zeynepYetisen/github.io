
function myFunction() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 5) ? "daha fazla okumalısınız.":"iyi bir okuyucusunuz.";
    document.getElementById("demo").innerHTML = voteable + ".";
}




day = new Date();
miVisit = day.getTime();
function clock() {
dayTwo = new Date();
hrNow = dayTwo.getHours();
mnNow = dayTwo.getMinutes(); 
scNow = dayTwo.getSeconds();
miNow = dayTwo.getTime();
if (hrNow == 0) {
hour = 12;
ap = " AM";
} else if(hrNow <= 11) {
ap = " AM";
hour = hrNow;
} else if(hrNow == 12) {
ap = " PM";
hour = 12;
} else if (hrNow >= 13) {
hour = (hrNow - 12);
ap = " PM";
}
if (hrNow >= 13) {
hour = hrNow - 12;
}
if (mnNow <= 9) {
min = "0" + mnNow;
}
else (min = mnNow)
if (scNow <= 9) {
secs = "0" + scNow;
} else {
secs = scNow;
}
time = hour + ":" + min + ":" + secs + ap;
document.form.button.value = time;
self.status = time;
setTimeout('clock()', 1000);
}

document.write("<form name=\"form\">"
+ "<input type=button"
+ " name=button ></form>");
onError = null;
clock();
// End -->





    document.addEventListener("DOMContentLoaded", function(event) {
 
    
      var e = document.getElementById("yenile");
 

      e.addEventListener("click", function() {
          

        document.location.reload(true); 
         
 
      }, false);
 
    });
    



    var options = {
      bottom: '64px', 
      right: 'unset', 
      left: '32px',
      time: '0.5s',
      mixColor: '#fff',
      backgroundColor: '#fff',  
      buttonColorDark: '#100f2c',  
      buttonColorLight: '#fff', 
      saveInCookies: false,
      label: '&#x1f313;',
      autoMatchOsTheme: true 
    }
    
    const darkmode = new Darkmode(options);
    darkmode.showWidget();