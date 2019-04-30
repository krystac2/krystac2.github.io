function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	document.getElementById(lightboxID).classList.remove('hidden');

}

function unhideLightbox1() {
	unhideLightbox('milk');
}

document.getElementsByClassName('pic1').onclick = unhideLightbox1;



function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');

	document.getElementById(lightboxID).classList.add('hidden');
}


function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;
