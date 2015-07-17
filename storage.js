var storage = {
	// sections is an array to store all the sections we have collected so far
	sections : [],
	events : [],
	// this function returns an object that contains name, time, and days
	newSection : function(name, startTime,endTime, days) {
		var section = {
			name : name,
			startTime : startTime,
			endTime: endTime,
			days : days
		};
		return section;
	},
	// adds a section to sections. Also performs rudimentary validation by
	// checking that
	// name, time, and days all have a value.
	addSection : function(section) {
		if (section.name === undefined || section.time === undefined
				|| section.days === undefined) {
			output("section not valid");
			return;
		}
		var sections = this.sections;
		sections.push(section);

	},

	// convenience function: creates a section with newSection(), then adds it
	// with addSection()
	// returns the created section
	addNewSection : function(name, time, days) {
		var section = this.newSection(name, time, days);
		this.addSection(section);
		return section;
	},
}
var CLIENT_ID = '740016804943-2ng58iqtp5eqngo478a41ahlsvu21n0q.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCflYrSMh4IMMjggnrtFNOIaY3negH_Bs4'
var SCOPES = [ "https://www.googleapis.com/auth/calendar" ];
var event = null;
function buildEvent(startTime, endTime, dayOffset, name) {
	var day = 5 + dayOffset;
	if (day < 10) {
		day = '0' + day
	}
	/*
	 * var event = { 'start' : { 'dateTime' : '2015-07-' + day + 'T' + startTime },
	 * 'end' : { 'dateTime' : '2015-07-' + day + 'T' + endTime }, 'htmlLink':
	 * 'google.com' }
	 */
	var event = {
		'summary' : name,
		'start' : {
			'dateTime' : '2016-12-' + day + 'T' + startTime,
			'timeZone' : 'America/Denver'
		},
		'end' : {
			'dateTime' : '2016-12-' + day + 'T' + endTime,
			'timeZone' : 'America/Denver'
		},
	};
	return event;
}
function postEvent(event) {
	this.event = event;
	request = gapi.client.calendar.events.insert({
		'calendarId' : 'primary',
		'resource' : event
	});
	request.then(function(response) {
		appendPre('Event created: ' + response.result.htmlLink);
	}, function(reason) {
		alert(reason.errors);
	});
}

function postBuiltEvent(startTime, endTime, dayOffset, name) {
	this.postEvent(this.buildEvent(startTime, endTime, dayOffset, name));
}

/*function postEvents(events) {
	
	events.forEach(function(event) {
		postEvent(event);
	})
}*/
function checkAuth() {
	gapi.auth.authorize({
		'client_id' : CLIENT_ID,
		'scope' : SCOPES,
		'immediate' : true
	}, handleAuthResult);
}
function handleAuthResult(authResult) {
	var authorizeDiv = document.getElementById('authorize-div');
	if (authResult && !authResult.error) {
		// Hide auth UI, then load client library.
		authorizeDiv.style.display = 'none';
		gapi.client.setApiKey(API_KEY);
	} else {
		// Show auth UI, allowing the user to initiate authorization by
		// clicking authorize button.
		authorizeDiv.style.display = 'inline';
	}
}
function appendPre(message) {
	var pre = document.getElementById('output');
	var textContent = document.createTextNode(message + '\n');
	pre.appendChild(textContent);
}