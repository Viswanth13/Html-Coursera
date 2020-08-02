(function () {

var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < name.length; i++) {
 var firstLetter = name[i].charAt(0).toLowerCase();
if (firstLetter === 'j') {
    goodbyespeaker(name[i]);
  } else {
   hellospeaker(name[i]);
  }
}

})();