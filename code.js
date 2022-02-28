function openWindow(i) {
	document.getElementById(i).classList.add("window");
	document.getElementById("background").classList.remove("off");
}

function closeWindow() {
	document.getElementById("background").classList.add("off");
	for(let i=1; i<=3; i++)
		document.getElementById(i).classList.remove("window")
}