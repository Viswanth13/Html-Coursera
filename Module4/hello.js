(function sayhello(window) {
	var hellospeaker={};
	var speakword="Hello";
	
  hellospeaker.sayhello = function(){
  console.log(speakword + " " + name);
}

window.hellospeaker = hellospeaker;

})(window);