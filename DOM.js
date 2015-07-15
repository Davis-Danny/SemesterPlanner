function add_course() {
	var put = document.createElement("input")
	put.id = "course"
	document.body.appendChild(put)
	/* document.body.insertAfter(put, rows) */
	var check = document.createElement("input")
	check.setAttribute("type", "checkbox")
	check.id = "days"
	document.body.appendChild(days)
	/* document.body.insertAfter(day, rows) */
	var t1 = document.createElement("input")
	t1.id = "start_time"
	document.body.appendChild(t1)
	var t2 = document.createElement("input")
	t2.id = "end_time"
	document.body.appendChild(t2)
}