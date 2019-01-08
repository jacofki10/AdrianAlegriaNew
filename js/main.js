var album = document.getElementsByClassName('album');
var show = album[0];
var a = show.parentElement;

a.addEventListener('mouseenter', function() {
	show.classList.remove('d-none');
});

a.addEventListener('mouseleave', function() {
	show.classList.add('d-none');
});

var token = '1561946125.8a60331.c43b4d0d117943388eddf3391256a463',
	num_photos = 9, // maximum 20
	container = document.getElementById('rudr_instafeed'), // it is our <ul id="rudr_instafeed">
	scrElement = document.createElement('script');

window.mishaProcessResult = function(data) {
	for (x in data.data) {
		container.innerHTML +=
			'<a class="mb-4 mb-lg-5 d-block mx-auto position-relative" href="' +
			data.data[x].link +
			'" target="_blank"><div class="col-md-6 col-lg-4"><img class="img-fluid" src="' +
			data.data[x].images.standard_resolution.url +
			'"></a></div>';
	}
};

scrElement.setAttribute(
	'src',
	'https://api.instagram.com/v1/users/self/media/recent?access_token=' +
		token +
		'&count=' +
		num_photos +
		'&callback=mishaProcessResult'
);
document.body.appendChild(scrElement);
