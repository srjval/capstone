function renderTime(){
	// date
	var mydate = new Date();
	var year = mydate.getYear();
		if (year < 1000){
			year += 1900
		}
	var day = mydate.getDay();
	var month = mydate.getMonth();
	var daym = mydate.getDate();
	var dayarray = new Array ("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
	var montharray = new Array ("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
	// Date end
	
	// Time
	var currentTime= new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
		if (h == 24){
			h = 0;
		}
		
		else if(h > 12){
			h = h - 0;
		}

		if (h < 10) {
			h = "0" + h;
		}

		if(m<10){
			m = "0"+ m;
		}

		if (s<10){
			s = "0" + s;
		}

		var myClock = document.getElementById("clockDisplay");
		// myClock.textContent = dayarray[day] + " " + daym + " " + montharray[month] + " " + year 
		myClock.innerText = dayarray[day] + " " + daym + " " + montharray[month] + " " + year 
		var myClock = document.getElementById("clockDisplay1");
		// myClock.textContent =  h + ":" + m + ":" + s;
		myClock.innerText = h + ":" + m + ":" + s;

		setTimeout("renderTime()",1000);
		
}
renderTime();


// Just put this code and it works
// myclock.innerText = dayarray[day] + " " + daym+  " " + montharray[month] + " " + year + " | " + h + " : " + m + " : " + s;
// Thanks to Philosofisk