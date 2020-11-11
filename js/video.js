var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play(); 
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause(); 
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9; 
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1; 
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	// if does not exceed
	if (video.currentTime + 5 < video.duration){
		video.currentTime = video.currentTime+5;
		console.log(video.currentTime); 
	}
	// if exceeds, restart
	else{ 
		video.currentTime = 0; 
		console.log(video.currentTime); 
	}
	 
});


document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted; 
	document.getElementById("mute").innerHTML = video.muted ? "Mute": "Unmute"; 
}); 


document.querySelector("#volumeSlider").addEventListener("change", function() {
	let curr_volume = document.getElementById("volumeSlider").value; 
	video.volume = curr_volume/100; 
	document.getElementById("volume").innerHTML = curr_volume;
	console.log(video.volume); 

}); 


document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime"); 
}); 


document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime"); 
}); 
