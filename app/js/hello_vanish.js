var time = 2000;
var hello = document.getElementsByClassName("hello")[0];
var hello_button_goto = document.getElementsByClassName('hello_button_goto')[0];


hello_button_goto.onclick = function(){
	
	hello.style.opacity = 0;
	console.log(this.className);
		
		setTimeout(function(){
			hello.style.transition = "top 1s";
			hello.style.top = -1000;
		}, time);	
}