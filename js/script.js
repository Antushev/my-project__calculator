let buttonNumber = document.querySelector(".numbers-block-calculator");
let buttonOperation = document.querySelector(".operation-calculator");
let buttonEqually = document.querySelector(".equally");
let buttonReset = document.querySelector(".reset");
let inputText = document.querySelector(".input-calculator");
let videoBlock = document.querySelector(".video-title");
let videoBlockB = document.querySelector(".video-boom")
let buttonPopup = document.querySelector(".button-info");
let buttonClosePopup = document.querySelector(".button-close");
let popupInfo = document.querySelector(".popup-about-calculator");
let buttonBlock = document.querySelector(".button-block-oooops");

buttonReset.addEventListener("click", function() {
	if(inputText.value != "") {		
		inputText.value = "";
	}
});

buttonEqually.addEventListener("click", function() {
	try {
		inputText.value = eval(inputText.value);
		if(inputText.value === "Infinity") {
			videoBlock.classList.add("video-title-show");
			videoBlock.play();
		}
	} catch(e) {
		alert("У вас ошибочка в выражении");
	}
});

buttonBlock.addEventListener("click", function() {
	videoBlockB.classList.add('video-boom-show');
	videoBlockB.play();
});

buttonOperation.addEventListener("click", function(evt) {
	if(evt.target.innerHTML.length === 1){
		inputText.value = inputText.value + evt.target.innerHTML;
	}
});

buttonNumber.addEventListener("click", function(evt) {
	if(evt.target.innerHTML.length === 1) {
		inputText.value = inputText.value + evt.target.innerHTML;
	}
});

buttonPopup.addEventListener("click", function() {
	popupInfo.classList.add("show-popup-about-calculator");
	popupInfo.classList.remove("close-popup-about-calculator");
});

buttonClosePopup.addEventListener("click", function() {
	popupInfo.classList.add("close-popup-about-calculator");
	popupInfo.classList.remove("show-popup-about-calculator");
});



