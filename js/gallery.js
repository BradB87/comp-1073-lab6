// STEP 1: Initialize and declare variables
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');


/* STEP 2: Loop 5 times to create the <img> elements */
for (var i = 1; i < 6; i++) {
	var newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/pic' + i + '.jpg');
	thumbBar.appendChild(newImage);
	/* STEP 3: Build event handler for each <img> */
	newImage.onclick = function (event) {
		var imgSrc = event.target.getAttribute('src');
		displayImage(imgSrc);
	}
}

/* STEP 4: Function to change the src of the main <img> */
function displayImage(value) {
	displayedImage.setAttribute('src', value);
}

/* STEP 5: Event Delegation
Instead of adding event handlers for each image, how about event delegation? Build a click handler on the parent element, and capture each target (and its attributes) from the event object */
thumbBar.addEventListener('click', function (event) {

	if (event.target && event.target.nodeName === 'IMG') {
		var imgSrc = event.target.getAttribute('src');
		displayImage(imgSrc);

		// code here//
		// Lab 6 STEP G: Call the clearWayfinding() function that you built below - and enjoy the result!

		// Lab 6 STEP A: Inside the thumbBar.onclick event handler function, and also inside the if statement, change the event.target CSS outline property to "5px solid red"
		//  thumbBar.onclick{
		// if()
		// }




		// Lab 6 STEP B: Next, change the event.target CSS position property to "relative"
		document.event.target.style.position = "relative";
		// Lab 6 STEP C: And then set the CSS z-index property to "10" so that the thumbnail clicked is on top of all the others




		// Lab 6 STEP D: Initialize and declare a var called 'thumbImgs' using the querySelectorAll method to grab all the IMG elements inside the .thumb-bar//brad
		var thumbImgs = querySelectorAll('<img>', '.thumbBar');

		// Lab 6 STEP E: Build a function called 'clearWayfinding()' that loops through the thumbImgs array with a FOR loop //brad
		function clearWayfinding() {
			for (const image of image) {
				const newImage = document.createElement('img');
				newImage.setAttribute('scr', `images/${image}`);
				newImage.setAttribute('alt', alts[image]);
				thumbBar.appendChild(newImage);
				newImage.addEventListener('click', e => {
					displayImage.scr = e.target.scr;
					displayImage.alt = e.target.alt;

				});
			}

		}
		// Lab 6 STEP F: Inside the clearWayfinding function, for each thumbImgs IMG element, set the CSS outline-width property to "0", and the z-index property also to "0"
		// clearWayfinding() {




		// }

	}
	// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate


})