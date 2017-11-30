var time = 2000;
var hello = document.getElementsByClassName("hello")[0];
var hello_button_goto = document.getElementsByClassName('hello_button_goto')[0];
var footer = document.getElementsByClassName('footer')[0];
var wrapper = document.getElementsByClassName('wrapper')[0];

wrapper.style.opacity = 0;
footer.style.opacity = 0;

hello_button_goto.onclick = function(){
	
	hello.style.opacity = 0;

	wrapper.style.opacity = 1;
	footer.style.opacity = 1;

	wrapper.style.transition = "opacity 2s";
	footer.style.transition = "opacity 2s";
	
	console.log(this.className);
		
		
		setTimeout(function(){
			hello.style.transition = "top 2s";
			hello.style.top = -1000;

		}, time);	
}