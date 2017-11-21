var indiceSlide = 2; //On affiche dès le lancement de notre page, la première slide
afficherSlide(indiceSlide);

function incrSlide(indice_){
	afficherSlide(indiceSlide += indice_);
}

function SlideActuelle(indice_){
	afficherSlide(indiceSlide = indice_);
}

/*document.getElementsBy... -> Document Object Model : le JS capture les propriétés du CSS
pour changer ses propriétés par la suite, c'est ce qui rend un site dynamique depuis le client*/
function afficherSlide(indice_){
	var i;
	var slides = document.getElementsByClassName("slides"); //On capture toutes nos classes/slides
	var dots = document.getElementsByClassName("point");
	if(indice_ > slides.length) //Si on atteint la fin de nos slides
		indiceSlide = 1; //On revient au début
	for(i = 0; i<slides.length;i++)
		slides[i].style.display = "none"; //On masque les slides en plus pour n'en garder qu'une seule
	for (i = 0; i < dots.length; i++)
      dots[i].className = dots[i].className.replace(" active", "");
	slides[indiceSlide-1].style.display = "block"; //On affiche une unique slide
	dots[indiceSlide-1].className += " active";
}