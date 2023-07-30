//your code here
function swapTheme() {
	var theme = document.getElementById('app');
var swapBtn = document.querySelector('#swap');
 	if(theme.classList.contains('day')){
		theme.classList.remove('day');
		theme.classList.add('night');
	}else{
		theme.classList.remove('night');
		theme.classList.add('day');
	}
	
 }
swapBtn.addEventListner('click', swapTheme);