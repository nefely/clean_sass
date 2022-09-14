$(document).ready(function() {
	function include(url) {
	    var script = document.createElement('script');
	    script.src = url;
	    document.getElementsByTagName('head')[0].appendChild(script);
	}
	include("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js");
	
    $('.preloader').fadeOut(300);
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});