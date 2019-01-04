var album = document.getElementsByClassName('album');
var show = album[0];
var a = show.parentElement;

a.addEventListener('mouseenter', function() {
	show.classList.remove('d-none');
});

a.addEventListener('mouseleave', function() {
	show.classList.add('d-none');
});
