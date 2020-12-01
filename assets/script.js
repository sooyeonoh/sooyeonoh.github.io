let carouselWidth = 420; 

let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

let imageNum = 0;

function showNextImages() {
	imageNum -= 3;
	checkControls();
	let pixels =  imageNum * carouselWidth;
	imageRow.style.left = pixels+"px";	
}

nextButton.onclick = showNextImages;

function showPrevImages() {
	imageNum += 3;
	checkControls();
	let pixels = imageNum * carouselWidth;
	imageRow.style.left = pixels+"px";
}

prevButton.classList.add("hidden");
prevButton.onclick = showPrevImages;

let totalImages = document.getElementsByClassName("carousel-image").length;

function checkControls() {
	if (imageNum == 0) {
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden");
	}
	if (imageNum == -1 * (totalImages - 3)) {
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden");
	}
}

