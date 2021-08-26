window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw2.js');
  }

  //Adding footer
  document.body.innerHTML+='<div class="footer" id="footer-box">© 2021 SHP</div>'
  document.getElementById("groupSize").value=groupSize;
  putItems();
}
