// CLOSE MOBILE NAVIGATION WINDOW
function closeNav() {
  var inputs = document.querySelectorAll('.navigation__checkbox')
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false
  }
}
