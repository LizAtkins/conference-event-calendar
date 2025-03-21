var calendarContainer = document.getElementById('calendar-container');

var startDate = new Date('January 1, 2025');
var endDate = new Date('December 31, 2025');
var currentDate = new Date(startDate);
const eventDates = ["2025-01-26", "2025-01-27", "2025-01-28", "2025-01-29", "2025-01-30", "2025-06-03", "2025-06-04", "2025-06-05", "2025-08-04", "2025-08-05", "2025-08-06", "2025-08-07", "2025-08-08", "2025-08-11", "2025-08-12", "2025-08-13", "2025-08-14", "2025-09-16", "2025-09-17", "2025-09-18", "2025-12-01", "2025-12-02", "2025-12-03", "2025-12-04", "2025-12-05", ];

while (currentDate <= endDate) {
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var firstDayOfWeek = new Date(year, month, 1).getDay();

    var monthContainer = document.createElement('div');
    monthContainer.classList.add('calendar-container');

    var calendarHeader = document.createElement('div');
    calendarHeader.classList.add('calendar-header');
    calendarHeader.innerHTML = '<h1>' + new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate) + '</h1>';

    var dayNames = document.createElement('div');
    dayNames.classList.add('day-names');
    var dayNamesArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (var i = 0; i < 7; i++) {
        var dayName = document.createElement('div');
        dayName.classList.add('day-name');
        dayName.textContent = dayNamesArray[i];
        dayNames.appendChild(dayName);
    }

    var calendarDays = document.createElement('div');
    calendarDays.classList.add('calendar');

    // Add empty cells for the days before the first day of the month
    for (var i = 0; i < firstDayOfWeek; i++) {
        var emptyDayDiv = document.createElement('div');
        emptyDayDiv.classList.add('day', 'empty-day');
        calendarDays.appendChild(emptyDayDiv);
    }

    // Add days of the month
    for (var i = 1; i <= daysInMonth; i++) {
        var dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
		
		 // Create a span element for the day number
    var dayNumber = document.createElement('span');
    dayNumber.textContent = i;

    // Append the day number to the dayDiv
    dayDiv.appendChild(dayNumber);

        // Check if the current date is in the eventDates array
        var currentDateStr = new Date(year, month, i).toISOString().split('T')[0];
        if (eventDates.includes(currentDateStr)) {
            dayDiv.classList.add('event-date'); // Add event-date class for event dates

            // Check for specific event dates and add custom text
            if (currentDateStr === '2024-05-07') {
                 // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text');
                eventText.textContent = 'DIBCON Conference' + ' ' +  'Oklahoma City, OK';
                dayDiv.appendChild(eventText);	

			 } else if (currentDateStr === '2024-08-19') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text');
                eventText.textContent = 'AA&S Conference' + ' ' +  'San Antonio, TX';
                dayDiv.appendChild(eventText);		 
			
			 } else if (currentDateStr === '2024-09-09') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text-red');
                eventText.textContent = 'TETS Symposium' + ' ' + 'Dayton, OH'  + ' ' + '*DD2345';
                dayDiv.appendChild(eventText);
			 } else if (currentDateStr === '2024-09-30') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text');
                eventText.textContent = 'SCRS Conference' + ' ' + 'St. Louis, MO';
                dayDiv.appendChild(eventText);
			 } else if (currentDateStr === '2024-10-21') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text');
                eventText.textContent = 'IIOM Symposium' + ' ' + 'Williamsburg, VA';
                dayDiv.appendChild(eventText);	
				 
			 } else if (currentDateStr === '2024-12-02') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text');
                eventText.textContent = 'DMC/' + 'ASIP Conference' + ' ' + 'Austin, TX';
                dayDiv.appendChild(eventText);
				 
			 } else if (currentDateStr === '2025-01-26') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text');
                eventText.textContent = 'CMS Conference' + ' ' + 'St. Aug, FL' + ' ' + '*DD2345';
                dayDiv.appendChild(eventText); 	 
				 
			  } else if (currentDateStr === '2025-06-03') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text');
                eventText.textContent = 'DIBCON Conference' + ' ' + 'Oklahoma City, OK';
                dayDiv.appendChild(eventText); 
				 
			 } else if (currentDateStr === '2025-08-04') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text');
                eventText.textContent = 'ICCM Conference' + ' ' + 'Baltimore, MD';
                dayDiv.appendChild(eventText);
			 } else if (currentDateStr === '2025-08-11') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text');
                eventText.textContent = 'DPMC Conference' + ' ' + 'Ponte Vedra, FL';
                dayDiv.appendChild(eventText); 
				 
			 } else if (currentDateStr === '2025-09-16') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text-red');
                eventText.textContent = 'AVTech Symposium' + ' ' + 'Dayton, OH'  + ' ' + '*DD2345';
                dayDiv.appendChild(eventText);	 
				 
            } else if (currentDateStr === '2025-12-01') {
                // Create a span element for the event text
                var eventText = document.createElement('span');
                eventText.classList.add('event-text-red');
                eventText.textContent = 'ASIP Conference' + ' ' + 'Austin, TX';
                dayDiv.appendChild(eventText);	 
				 
			
            } 
	
			else {
                // For other event dates, set the text content as the day number
                dayDiv.textContent = i;
            }
        } else {
            // For non-event dates, create a span element for the day number and apply CSS class
            var dayNumber = document.createElement('span');
            dayNumber.textContent = i;

            // Append the day number to the dayDiv
    
        }

        calendarDays.appendChild(dayDiv);
    }

    monthContainer.appendChild(calendarHeader);
    monthContainer.appendChild(dayNames);
    monthContainer.appendChild(calendarDays);
    calendarContainer.appendChild(monthContainer);

    // Move to the next month
    currentDate.setMonth(month + 1);
}