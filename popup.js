// Pop-up



if (document.querySelector(".fl-pop-up")) {
  window.addEventListener("load", function() {

    var btn = document.getElementById("btn_fl-pop-up");
    var modal = document.getElementById("fl-pop-up__init");

    // Open if exist
    if (btn) {
      btn.onclick = function() {
        modal.classList.add("fl-pop-up__active");
      };
    }

    var modal__overlay = document.querySelector(".fl-pop-up__overlay");
    var close = document.querySelector(".fl-pop-up__overlay--close");

    // Close on close click
    close.onclick = function() {
        modal__overlay.classList.remove("fl-pop-up__active");
    };
    // Close on window click
    window.onclick = function(event) {
      if (event.target == modal__overlay) {
        modal__overlay.classList.remove("fl-pop-up__active");
      }
    };
    // Close on ESC
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        modal__overlay.classList.remove("fl-pop-up__active");
      }
    };
  });
}
