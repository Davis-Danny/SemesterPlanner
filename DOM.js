function add_course() {
	var put = document.createElement("input")
	put.id = "course"
	document.body.appendChild(put)
	document.body.insertBefore(put, button)
	var m = document.createElement("input")
	m.setAttribute("type", "checkbox")
	m.id = "M"
	document.body.appendChild(m)
	document.body.insertBefore(m, button)
	var t = document.createElement("input")
	t.setAttribute("type", "checkbox")
	t.id = "T"
	document.body.appendChild(t)
	document.body.insertBefore(t, button)
	var w = document.createElement("input")
	w.setAttribute("type", "checkbox")
	w.id = "W"
	document.body.appendChild(w)
	document.body.insertBefore(w, button)
	var r = document.createElement("input")
	r.setAttribute("type", "checkbox")
	r.id = "R"
	document.body.appendChild(r)
	document.body.insertBefore(r, button)
	var f = document.createElement("input")
	f.setAttribute("type", "checkbox")
	f.id = "F"
	document.body.appendChild(f)
	document.body.insertBefore(f, button)
	var time1 = document.createElement("input")
	time1.id = "start_time"
	document.body.appendChild(time1)
	document.body.insertBefore(time1, button)
	var time2 = document.createElement("input")
	time2.id = "end_time"
	document.body.appendChild(time2)
	document.body.insertBefore(time2, button)
	var br = document.createElement("br")
	document.body.appendChild(br)
	document.body.insertBefore(br, button)
}