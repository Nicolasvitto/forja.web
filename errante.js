document.addEventListener("DOMContentLoaded", function() {
	const galeria = document.querySelector(".galeria");
	galeria.addEventListener("click", function(event) {
		if (event.target.tagName === "IMG") {
			
			console.log("Clique na imagem:", event.target.src);
		}
	});
});