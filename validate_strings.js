function validateForm(name, time, days) {
    if (name == null || name == "") {
        alert("Invalid Input");
        return false;
    }
	if (time == null || time == "") {
        alert("Invalid Input");
        return false;
    }
	if (days != "MWF" || "mwf" || "TH" || "th" || "MW" || "mw" || "F" || "f") {
        alert("Invalid Input. Enter using one letter for each day.");
        return false;
    }
	return true;
}