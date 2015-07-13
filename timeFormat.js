function timeFormat() {
	// regular expression to match required time format
    re = /^\d{2}:\d{2}?$/;
    x = form.starttime.value
    y = form.endtime.value

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
    
    form.starttime.value = x
    form.endtime.value = y
    
    return
}