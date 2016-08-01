 /*
  * Copyright (C) Chi Hoang - All Rights Reserved
  */
window.onload = function ready () {
	 l = new Publisher(new List());
	 //l.AddCountry(new Subject(100),"FR","France");
	 //l.AddCountry(new Subject(100),"DE","Germany");
	 //l.AddCountry(new Subject(100),"EN","England");
	 //l.AddCountry(new Subject(100),"CN","China")
	 var iplong=0;
	 var start=Math.floor(iplong/l.step)*l.step;
	 var end=(start+100*l.step)-l.step;
	 l.Request(start,end, "down");
	 window.onscroll = function(ev) {
		//http://blog.grayghostvisuals.com/js/detecting-scroll-position/     
		if (document.body.scrollTop == 0) {
			console.log("Top of page");
			
			//var elem = document.getElementsByClassName('nav');
			//l.RemoveClass(elem);
			
			var observerCount = l.observers.count();
			if (observerCount>100) {			   
				for (var a=100,b=observerCount;a<b;a++) {
					e = window.document.getElementById(l.observers.get(a).ele.id);
					var elem = document.getElementsByClassName(e.className);
					l.RemoveClass(elem);	
					l.RemoveClass(document.getElementsByClassName("linebreak "+e.id));
				}
				l.observers.removeAt(100,b);				
			}
			switch (l.direction) {
				case "down": {
					var page = Math.floor((observerCount-100)/100)*l.range + l.range+Math.floor((observerCount-100)/100)*l.step;
					l.Request(l.from-page-l.step-l.step,l.from-page+l.range-l.step,"up");
					break;
				};
				case "up": {
					l.Request(l.from-l.range,l.from,"up");
					break;
				}
				default: {
					l.Request(l.from-l.range-l.step-l.step,l.from-l.step,"up");
					break;
				}
			} 
			
			console.log(window.innerHeight-window.outerHeight/2*-2);
			//http://stackoverflow.com/questions/15691569/javascript-issue-with-scrollto-in-chrome
			setTimeout(function() {window.scrollTo(0,window.innerHeight-window.outerHeight/2*-2);},500);
		}
		//http://stackoverflow.com/questions/15260184/strange-behaviour-of-chrome-at-window-scrollto
		if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
			// you're at the bottom of the page
			console.log("Bottom of page");
			
			//var elem = document.getElementsByClassName('nav');
			//l.RemoveClass(elem);

			var observerCount = l.observers.count();
			if (observerCount>100) {		
				for (var a=0,b=observerCount-100;a<b;a++) {
					e = window.document.getElementById(l.observers.get(a).ele.id);
					var elem = document.getElementsByClassName(e.className);
					l.RemoveClass(elem);					
					l.RemoveClass(document.getElementsByClassName("linebreak "+e.id))
				}
				l.observers.removeAt(0,b);
			}	
			switch (l.direction) {
				case "down": {
					l.Request(l.to+l.step,l.to+l.range+l.step,"down");  
					break;
				};
				case "up": {
					l.Request(l.to+l.range+l.step+l.step,l.to+l.range+l.range+l.step+l.step,"down"); 
					break;
				}
				default: {
					l.Request(l.to+l.step,l.to+l.range+l.step,"down"); 
					break;
				}
			}
		}
	};
}

