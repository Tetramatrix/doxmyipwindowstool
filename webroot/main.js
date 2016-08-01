 /*
  * Copyright (C) Chi Hoang - All Rights Reserved
  */
  
function List() {
  this.observerList = [];
  return this;
}
 
List.prototype = {
  add : function( obj ){
    return this.observerList.push( obj );
  },
  unshift : function( obj ){
    return this.observerList.unshift( obj );
  },
  count : function() {
    return this.observerList.length;
  },
  get : function( index ){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
  },
  reset : function ( index ) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.ipaddr > b.ipaddr ) ? 1 : (b.ipaddr  > a.ipaddr ) ? -1 : 0 : -1;});
    this.target();
  },
  target : function (callback) {
		document.body.innerHTML = '';
		for (var i=0,x=this.observerList.length;i<x;i++) {
			this.observerList[i].navigation=0;
			if (this.observerList[i].type=="ip" && this.observerList[i].visibility=="show") {			
				
				colclass = (i % 2) ? "column1" : "column2";
	
				this.observerList[i].ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(this.observerList[i].ele);
				
				a = new Subject(100);
				a.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(a.ele);
				a.ele.appendChild(window.document.createTextNode(this.observerList[i].city));   
				
				b = new Subject(100);
				b.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(b.ele);
				b.ele.appendChild(window.document.createTextNode(this.observerList[i].region));
				
				c = new Subject(100);
				c.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(c.ele);
				c.ele.appendChild(window.document.createTextNode(this.observerList[i].country));    
				
				d = new Subject(100);
				d.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(d.ele);
				d.ele.appendChild(window.document.createTextNode(this.observerList[i].latitude));
				
				e = new Subject(100);
				e.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(e.ele);
				e.ele.appendChild(window.document.createTextNode(this.observerList[i].longitude));
				
				f = new Subject(100);
				f.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(f.ele);
				f.ele.appendChild(window.document.createTextNode(this.observerList[i].timezone));
				
				g = new Subject(100);
				g.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(g.ele);
				g.ele.appendChild(window.document.createTextNode(this.observerList[i].zipcode));
				
				h = new Subject(100);
				h.ele.className = "linebreak " + this.observerList[i].ele.id;		
				window.document.body.appendChild(h.ele);
				window.document.getElementById(h.ele.id).style.width=0;
				window.document.getElementById(h.ele.id).style.height=0;
				window.document.getElementById(h.ele.id).style.clear="both";
				window.document.getElementById(h.ele.id).style.float="none";
			 }
		}		
  },
  suipaddr  : function (index,callback) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.ipaddr > b.ipaddr ) ? 1 : (b.ipaddr  > a.ipaddr ) ? -1 : 0 : -1;});
    this.target();
  },
  sdipaddr  : function (index,callback) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.ipaddr  < b.ipaddr ) ? 1 : (b.ipaddr  < a.ipaddr ) ? -1 : 0 : -1;});
	this.target();
  },
  sucity : function (index,callback) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.city > b.city) ? 1 : (b.city > a.city) ? -1 : 0 : -1;});
    this.target();
  },
  sdcity : function (index,callback) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.city < b.city) ? 1 : (b.city < a.city) ? -1 : 0 : -1;});
    this.target();
  },
  sdcountry : function (index,callback) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.country < b.country) ? 1 : (b.country < a.country) ? -1 : 0 : -1;});
    this.target();
  },
   sucountry : function (index,callback) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.country > b.country) ? 1 : (b.country > a.country) ? -1 : 0 : -1;});
    this.target();
  },
  suregion : function (index,callback) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.region > b.region) ? 1 : (b.region > a.region) ? -1 : 0 : -1;});
    this.target();
  },
  sdregion : function (index,callback) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.region < b.region) ? 1 : (b.region < a.region) ? -1 : 0 : -1;});
    this.target();
  },
  suzipcode : function ( index ) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.zipcode > b.zipcode) ? 1 : (b.zipcode > a.zipcode) ? -1 : 0 : -1;});
    this.target();
  },
  sdzipcode : function ( index ) {
     this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.zipcode < b.zipcode) ? 1 : (b.zipcode < a.zipcode) ? -1 : 0 : -1;});
    this.target();
  },
  sutimezone : function ( index ) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.timezone > b.timezone) ? 1 : (b.timezone > a.timezone) ? -1 : 0 : -1;});
    this.target();
  },
  sdtimezone : function ( index ) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.timezone < b.timezone) ? 1 : (b.timezone < a.timezone) ? -1 : 0 : -1;});
    this.target();
  },
  indexOf : function( obj, startIndex ){
    var i = startIndex;
      while( i < this.observerList.length ){
       if( this.observerList[i] === obj ){
         return i;
       }
       i++;
     }
     return -1;
  },
  removeAt : function( from, to){
    this.from = from || 0;
    this.to = to || 1;    
    this.observerList.splice( from, to );
  }
};
 
var Subject = function (navigation,width,height) {
  this.width = width || "110px";
  this.height = height || "20px";
  this.navigation = navigation || 10;
  this.ele = document.createElement("div");
  this.ele.id = Math.floor((Math.random() * 768716276990) + 1);
  this.ele.className = "column";
  this.ele.style.whiteSpace="nowrap";
  this.ele.style.display="block";
  this.ele.style.cssFloat="left";
  this.ele.style.width = this.width;
  this.ele.style.height = this.height;
  return this;
}

Subject.prototype = {
  update : function (parent,id) {
    this.ele.b=null;
	//this.ele.b=setInterval( function () { parent.Notify(id); },parent.tinterval);
  }
}

var Publisher = function (observers)
{
  this.xhr=[];
  this.n = 25;  
  this.from=0;
  this.to=0;  
  this.observers = observers;
  this.seed = 768716276;
  this.tstart = 50;
  this.tinterval = 1000000;
  this.step = 256*256;
  this.range=(100*this.step)-this.step;
  
  this.navbar ='<button id="ipaddrup#" onclick="l.observers.suipaddr(\'#\');">+ IPaddress</button> \
          <button id="ipaddrdown#" onclick="l.observers.sdipaddr(\'#\');">- IPaddress</button> \
        <button id="cityup#" onclick="l.observers.sucity(\'#\');">+ city</button> \
          <button id="citydown#" onclick="l.observers.sdcity(\'#\');">- city</button> \
		  <button id="regionup#" onclick="l.observers.suregion(\'#\');">+ region</button> \
          <button id="regiondown#" onclick="l.observers.sdregion(\'#\');">- region</button> \
          <button id="countryup#" onclick="l.observers.sucountry(\'#\');">+ country</button> \
          <button id="countrydown#" onclick="l.observers.sdcountry(\'#\');">- country</button> \
		  <button id="tzup#" onclick="l.observers.sutimezone(\'#\');">+ timezone</button> \
          <button id="tzdown#" onclick="l.observers.sdtimezone(\'#\');">- timezone</button> \
		  <button id="zipcodeup#" onclick="l.observers.suzipcode(\'#\');">+ zipcode</button> \
          <button id="zipcodedown#" onclick="l.observers.sdzipcode(\'#\');">- zipcode</button> \
          <button id="reset#" onclick="l.observers.reset(\'#\');">Reset</button> \
          ';
  return this;
}

Publisher.prototype = {
	CreateRequestObject : function () {
		var xmlHttp = false;
		if (typeof(XMLHttpRequest) != 'undefined') {
			xmlHttp = new XMLHttpRequest();
		}
		if (!xmlHttp) {
			try {
				xmlHttp  = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				try {
					xmlHttp  = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e) {
					xmlHttp  = false;
				}
			}
		}
		return xmlHttp;
	},
	Request : function  (from, to , direction) {
		var i=0; var me=this;
        this.from=from;
        this.to=to;
        this.direction=direction || "down";
		this.xhr[i]= this.CreateRequestObject();		
		if (this.xhr[i]) {
			this.xhr[i].open('GET', 'ajax.php?from='
					+this.from
					+'&to='+this.to
					+'&step='+this.step,
					true);
			this.xhr[i].responseType = 'json';
			this.xhr[i].onreadystatechange = null;
			this.xhr[i].addEventListener( "load", function(e) { me.Response(e);}, false);
			this.xhr[i].send(null);
		}
	},
	Response : function (request) {
		obj=request.target.response;
		switch (this.direction) {        
		  case "down": {
			for (var i=0,e=obj.length;i<e;i++) {
			  this.Down(new Subject(100),obj[i].ipaddr,obj[i].countryCode, 
					obj[i].regionName,obj[i].cityName,obj[i].lat,obj[i].long,obj[i].zipCode,obj[i].timeZone,i)                 
			}   
		  }
		  break;
		  case "up" : {
			for (var i=obj.length-1;i>0;i--) {
			  this.Up(new Subject(100),obj[i].ipaddr,obj[i].countryCode,
					obj[i].regionName,obj[i].cityName,obj[i].lat,obj[i].long,obj[i].zipCode,obj[i].timeZone,i)                 
			}
		  }
		}
  },
  Up : function(ip,ipaddr,country,region,city,latitude,longitude,zipcode,timezone,z) {
    ip.ipaddr = ipaddr || 0;
    ip.country = country || 0;
    ip.region = region || 0;
    ip.city = city || 0;
	ip.latitude = latitude || 0;
	ip.longitude = longitude || 0;
	ip.zipcode = zipcode || 0;
	ip.timezone = timezone || 0;
    ip.navigation = 0;
    ip.type = "ip";
    ip.visibility = "show";
    ip.uid = ip.ele.id;
    ip.z = z;
	
    h = new Subject(100);
	h.ele.className = "linebreak " + ip.ele.id;    
    window.document.body.insertBefore(h.ele,window.document.body.childNodes[0]);
    window.document.getElementById(h.ele.id).style.width=0;
    window.document.getElementById(h.ele.id).style.height=0;
    window.document.getElementById(h.ele.id).style.clear="both";
    window.document.getElementById(h.ele.id).style.float="none";
       
    colclass = (z % 2) ? "column1" : "column2";

    g = new Subject(100);    
    g.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(g.ele,window.document.body.childNodes[0]);
    g.ele.appendChild(window.document.createTextNode(ip.zipcode));
    
    f = new Subject(100);
    f.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(f.ele,window.document.body.childNodes[0]);
    f.ele.appendChild(window.document.createTextNode(ip.timezone));
       
    e = new Subject(100);
    e.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(e.ele,window.document.body.childNodes[0]);
    e.ele.appendChild(window.document.createTextNode(ip.longitude));
    
    d = new Subject(100);
    d.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(d.ele,window.document.body.childNodes[0]);
    d.ele.appendChild(window.document.createTextNode(ip.latitude));
    
    c = new Subject(100);
    c.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(c.ele,window.document.body.childNodes[0]);
    c.ele.appendChild(window.document.createTextNode(ip.country));    
  
    b = new Subject(100);
    b.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(b.ele,window.document.body.childNodes[0]);
    b.ele.appendChild(window.document.createTextNode(ip.region));
    
    a = new Subject(100);    
    a.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(a.ele,window.document.body.childNodes[0]);
    a.ele.appendChild(window.document.createTextNode(ip.city));   
    
    ip.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(ip.ele,window.document.body.childNodes[0]);
    ip.ele.appendChild(window.document.createTextNode(ip.ipaddr));    
    
	this.observers.unshift(ip);
    var me=this;
    ip.b=setInterval( function () { me.Notify(ip.ele.id); },this.tstart);	
  },
  Down : function(ip,ipaddr,country,region,city,latitude,longitude,zipcode,timezone,z) {
    ip.ipaddr = ipaddr || 0;
    ip.country = country || 0;
    ip.region = region || 0;
    ip.city = city || 0;
	ip.latitude = latitude || 0;
	ip.longitude = longitude || 0;
	ip.zipcode = zipcode || 0;
	ip.timezone = timezone || 0;
    ip.navigation = 0;
    ip.type = "ip";
    ip.visibility = "show";
    ip.uid = ip.ele.id;
	ip.z = z;
    
    colclass = (z % 2) ? "column1" : "column2";
    
    ip.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(ip.ele);
    ip.ele.appendChild(window.document.createTextNode(ip.ipaddr));
        
    a = new Subject(100);
    a.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(a.ele);
    a.ele.appendChild(window.document.createTextNode(ip.city));   
    
    b = new Subject(100);
    b.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(b.ele);
    b.ele.appendChild(window.document.createTextNode(ip.region));
    
    c = new Subject(100);
    c.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(c.ele);
    c.ele.appendChild(window.document.createTextNode(ip.country));    
    
    d = new Subject(100);
    d.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(d.ele);
    d.ele.appendChild(window.document.createTextNode(ip.latitude));
    
    e = new Subject(100);
    e.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(e.ele);
    e.ele.appendChild(window.document.createTextNode(ip.longitude));
    
    f = new Subject(100);
    f.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(f.ele);
    f.ele.appendChild(window.document.createTextNode(ip.timezone));
    
    g = new Subject(100);
    g.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(g.ele);
    g.ele.appendChild(window.document.createTextNode(ip.zipcode));
    
    h = new Subject(100);
	h.ele.className = "linebreak " + ip.ele.id;    
    window.document.body.appendChild(h.ele);
    window.document.getElementById(h.ele.id).style.width=0;
    window.document.getElementById(h.ele.id).style.height=0;
    window.document.getElementById(h.ele.id).style.clear="both";
    window.document.getElementById(h.ele.id).style.float="none";
	
	this.observers.add(ip);    
	var me=this;
    ip.b=setInterval( function () { me.Notify(ip.ele.id); },this.tstart);
  },
  AddCountry : function (country, acronym, name) {
    country.acronym = acronym || "test";
	country.name = name || "test";
    country.navigation = 0;
    country.type = "country";
    this.observers.add(country);
  },
  Removeip : function(observer) {
    this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
    return this.observers.count();
  },
  //http://stackoverflow.com/questions/3387427/remove-element-by-id
  RemoveId : function (id) {
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
  },
  //http://stackoverflow.com/questions/4777077/removing-elements-by-class-name
  //http://stackoverflow.com/questions/10842471/remove-all-elements-of-a-certain-class-with-javascript
  RemoveClass : function (elem) {
	while(elem.length > 0){
        elem[0].parentNode.removeChild(elem[0]);
    }
    return true;
  },
  AddNav : function (){
		var elem = document.getElementsByClassName('nav');
		this.RemoveClass(elem);
		
		var observerCount = this.observers.count();

		var a = document.createElement("div");
		a.id =  Math.floor((Math.random() * this.seed) + 1);
		a.className = "nav";
		a.innerHTML = this.navbar.replace(/#/g, Math.floor((Math.random() * this.seed) + 1));
		document.body.insertBefore(a,document.body.childNodes[0]);
		this.observers.get(0).navigation=1;
			
		for(var i=0; i < observerCount; i++){
			if (i % this.n == 0 && i != 0 && this.observers.get(i).type=="ip" && this.observers.get(i).visibility=="show") {		  
				e = window.document.getElementById(this.observers.get(i).ele.id).previousElementSibling;
				if (e.className.indexOf("linebreak")!=-1 && e != undefined) {
					this.observers.get(i).navigation=1;
					y=Math.floor((Math.random() * this.seed) + 1);
					var a = document.createElement("div");
					a.id = y;
					a.className = "nav";
					a.innerHTML =  this.navbar.replace(/#/g, y);
					e.outerHTML+=a.outerHTML;			  
				}
			}   
	   }
   },  
   Notify : function(id){
	   observerZ=this.observers.count();
	   for(var i=0; i < observerZ; i++){
			a=this.observers.get(i);
			if (a.ele.id==id) {
				a.update(this,id);
				break;
			}		
	   }
	   if (a.ele.id==id && i==0 && a.navigation==0 && this.direction=="up") {
			a.navigation=1;
			this.AddNav();  
		} else  if (a.ele.id==id && i==observerZ-1 && a.navigation==0 && this.direction=="down") {
			a.navigation=1;
			this.AddNav();  
		}
   }
}


