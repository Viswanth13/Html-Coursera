(function saygoodbye(window) {
	var goodbyespeaker={};
	var speakword="Goodbye";
	
 goodbyespeaker.saygoodbye = function() {
  console.log(speakword + " " + name);
}

window.goodbyespeaker = goodbyespeaker;
})(window);