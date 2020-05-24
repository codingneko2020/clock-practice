function mytime(){
  var time = new Date();
  var hour = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var week = time.getDay();
  var week_day;
  
    switch(week){
      case 0:
        week_day = "Sun.";
      break;

      case 1:
        week_day = "Mon.";
      break;
        
      case 2:
        week_day = "Tue.";
      break;
        
      case 3:
        week_day = "Wed.";
      break;
        
      case 4:
        week_day = "Thu.";
      break;
        
      case 5:
        week_day = "Fri.";
      break;
        
      case 6:
        week_day = "Sat.";
      break;
    }  
 

  document.getElementById("my_clock").innerHTML = hour + ":" + min + ":" + sec + " " + week_day;
}

window.onload = function(){
  var timer = setInterval(mytime,1000)
};