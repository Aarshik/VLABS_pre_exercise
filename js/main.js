//Calculating the values in result
function getValue()
{
  var len = document.getElementById("len-input").value;
  var a = Math.sqrt(len*10/9.8);
  var b = 2 * Math.PI;
  time = b * a;
  var t = time.toFixed(2);
  var freq = 1/t;
  var f = freq.toFixed(2);
  var f_hz= 2*f;
  if (len >=100 && len <=200)
  {
    document.getElementById("time_period").innerHTML = t;
    document.getElementById("freq_rad").innerHTML = f;
    document.getElementById("freq_hz").innerHTML = f_hz;
  }
  else
  {
    alert("Invalid Length--Enter a number from 100-200")
  }
  
}
start_button.addEventListener("click",function(){
  thread.style.animation= "swing 2.5s ease-in-out infinite";
});



