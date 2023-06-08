// your code here
var form = document.querySelector("form");
var h3 =document.querySelector("#url");
var nameElement = document.querySelector("#name");
var yearElement= document.querySelector("#year");
var btn= document.querySelector("#button");
 function handleSubmit(event) {
 	event.preventDefault();
	 var h3Value= h3.innerText;
	 var name = nameElement.value;
	 var year = yearElement.value;
	 if(name && year)
	 {
		 h3Value += '?name=' + name + '&year' + year;
	 }
	 else if (!name && year)
	 {
		 h3Value += '?year=' + year;
	 }
	 else if(name && !year)
	 {
		 h3Value+= '?name=' + name;
	 }
	 h3.textContent= h3Value;
 }
form.addEventListener('Submit' , handleSubmit);