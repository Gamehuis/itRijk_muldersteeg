function startClock() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
}

function goodbye(e) {
        if(!e) e = window.event;
        //e.cancelBubble is supported by IE - this will kill the bubbling process.
        e.cancelBubble = false;
        e.returnValue = 'You sure you want to leave?'; //This is displayed on the dialog

        //e.stopPropagation works in Firefox.
        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
window.onbeforeunload=goodbye;