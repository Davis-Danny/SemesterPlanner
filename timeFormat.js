var x;
var y;

function timeFormat() {
	// regular expression to match required time format
    re = /^\d{2}:\d{2}?$/;
    re2 = /^\d{2}:\d{2}:\d{2}?$/;
    x = document.getElementById("starttime").value
    y = document.getElementById("endtime").value

    if(document.getElementById("starttime").value.match(re)&&document.getElementById("endtime").value.match(re)){
    	x = document.getElementById("starttime").value
    	y = document.getElementById("endtime").value
    }else{
	    if(!document.getElementById("starttime").value.match(re)) {
	      alert("Invalid time format: " + document.getElementById("starttime").value);
	      return false;
	    }
	    else{
	    	x = document.getElementById("starttime").value + ":00"
	    }
	    
	    if(!document.getElementById("endtime").value.match(re)) {
	        alert("Invalid time format: " + document.getElementById("endtime").value);
	        return false;
	      }
	      else{
	      	y = document.getElementById("endtime").value + ":00"
	      }
    }
    document.getElementById("starttime").value = x
    document.getElementById("starttime").value = y
    
    var days=[
          document.getElementById("monBox"),
          document.getElementById("tueBox"),
          document.getElementById("wedBox"),
          document.getElementById("thuBox"),
          document.getElementById("friBox")];
    gapi.client.load('calendar', 'v3',postEvents);
    
    
    return
}
function postEvents(){
	// postBuiltEvent('14:00:00', '15:00:00', 0, 'CIT 380');
	var i = 0;
	var events = [];
	var days=[
	          document.getElementById("monBox"),
	          document.getElementById("tueBox"),
	          document.getElementById("wedBox"),
	          document.getElementById("thuBox"),
	          document.getElementById("friBox")];
	var name = document.getElementById("name").value;
	appendPre(x+","+y);
		if(document.getElementById("monBox").checked){
			postBuiltEvent(x+":00", y+":00", 0,name);
		}if(document.getElementById("tueBox").checked){
			postBuiltEvent(x+":00", y+":00", 1,name);
		}if(document.getElementById("wedBox").checked){
			postBuiltEvent(x+":00", y+":00", 2,name);
		}if(document.getElementById("thuBox").checked){
			postBuiltEvent(x+":00", y+":00", 3,name);
		}if(document.getElementById("friBox").checked){
			postBuiltEvent(x+":00", y+":00", 4,name);
		}
		
}