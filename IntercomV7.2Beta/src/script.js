setTimeout(function() {
  var msr = document.title
const message = msr// Try edit me
// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)
//message
var inter = message
//my scripts
if (inter.length===0){
  location.reload();
} else{
var audio = new Audio('notif.mp3');
audio.play();
var msg = new SpeechSynthesisUtterance();
msg.text = inter;
window.speechSynthesis.speak(msg);
setTimeout(function() {
  location.reload();
}, 30000);
}
}, 1000);