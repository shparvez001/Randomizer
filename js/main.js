window.onload = () => {

  /* disabling software workers
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
*/
  //Adding footer
  document.body.innerHTML+='<div class="footer" id="footer-box">© 2021 SHP</div>'

/*
  var navContent='<li class="nav non-link">NEUB CSE</li>';
  //navContent+= '<li class="nav"><a class="active" href="/">Home</a></li>';
  navContent+= '<li class="nav"><a href="/">Home</a></li>';
  navContent+= '<li class="nav"><a href="/Noticeboard">Noticeboard</a></li>';
  navContent+= '<div class="dropdown"><button class="dropbtn">Thesis/Project</button>';
  navContent+='<div class="dropdown-content">'
  navContent+= '<a href="docsThesisProject.html">Thesis/Project Templates and Documents</a> ';
  navContent+= '<a href="cse402.html">Thesis/Project List</a>';
  navContent+= '</div>';
  document.getElementById("top-nav").innerHTML=navContent;
  var page=window.location.href.split("/").pop();
  //console.log(page);
  var all = document.getElementsByClassName('nav');
  //window.alll=all;
  //console.log(all);
  for (var i = 2; i < all.length; i++) { //First 2 items are not links
		//all[i].className="modal-content-mobile";
    //console.log(all[i].firstChild.href.split('/').pop());
    if(all[i].firstChild.href.split('/').pop()==page)
    {
      //console.log(all[i].firstChild.href.split('/').pop());
      all[i].firstChild.className="active";
    }

	}
*/
}
