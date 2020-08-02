(function saygoodbye(window) {
	
	var speakword="Goodbye";
	
 var goodbyespeaker= function(name){
  console.log(speakword + " " + name);
}

window.goodbyespeaker = goodbyespeaker;
})(window);