window.onscroll = function() {makeOpaque()};

function makeOpaque() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav-bar").style.backgroundColor = "#fffee2";
      } else {
        document.getElementById("nav-bar").style.backgroundColor = "";
      }
}