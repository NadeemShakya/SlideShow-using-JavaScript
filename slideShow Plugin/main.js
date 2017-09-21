var 
	value = 1, 
	maxPic = 5;                 // Change the value of maxPic according to the number of pics for your slideshow.

previous = document.getElementById('p');
next = document.getElementById('n');
sliderImage = document.getElementById('sliderImage');
indicator = document.getElementById('imageIndicator');
indicator.innerHTML = value + " / " + (maxPic);

//FOR MANUAL SLIDE CHANGE.


previous.addEventListener("click", decrease);
next.addEventListener("click", increase);
	
function decrease() {
	value -= 1;
	if(value == 0) {
		value = maxPic;
	}
	
	sliderImage.src = "images/background"+value+".jpg";
	indicator.innerHTML = value + " / " + (maxPic);

	
}

function increase() {
	value += 1;
	if(value > maxPic){
		value = 1;

	}
	sliderImage.src = "images/background"+value+".jpg";
	indicator.innerHTML = value + " / " + (maxPic);

	
}




// FOR AUTOMATIC SLIDE CHANGE !

//REMOVE THE COMMENT FROM HERE AND DELETE THIS LINE.

// function animator() {
	
// 	value += 1;
// 	if(value > maxPic) {
// 		value = 1;
// 	}
// 	sliderImage.src = "images/background"+value+".jpg";
// 	indicator.innerHTML = value + " / " + (maxPic);
// 	setTimeout(animator, 2000);
// }

// animator();

