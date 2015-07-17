var x;
var y;

function timeFormat() {
	// regular expression to match required time format
    re = /^\d{2}:\d{2}?$/;
    re2 = /^\d{2}:\d{2}:\d{2}?$/;
    x = form.starttime.value
    y = form.endtime.value

    if(form.starttime.value.match(re)&&form.endtime.value.match(re)){
    	x = form.starttime.value
    	y = form.endtime.value
    }else{
	    if(!form.starttime.value.match(re)) {
	      alert("Invalid time format: " + form.starttime.value);
	      form.starttime.focus();
	      return false;
	    }
	    else{
	    	x = form.starttime.value + ":00"
	    }
	    
	    if(!form.endtime.value.match(re)) {
	        alert("Invalid time format: " + form.endtime.value);
	        form.endtime.focus();
	        return false;
	      }
	      else{
	      	y = form.endtime.value + ":00"
	      }
    }
    form.starttime.value = x
    form.endtime.value = y
    
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
		}
		if(document.getElementById("tueBox").checked){
			postBuiltEvent(x+":00", y+":00", 1,name);
		}if(document.getElementById("wedBox").checked){
			postBuiltEvent(x+":00", y+":00", 2,name);
		}if(document.getElementById("thuBox").checked){
			postBuiltEvent(x+":00", y+":00", 3,name);
		}if(document.getElementById("friBox").checked){
			postBuiltEvent(x+":00", y+":00", 4,name);
		}
		
}