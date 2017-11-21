/*document.getElementsBy... -> Document Object Model : le JS capture les propriétés du CSS
pour changer ses propriétés par la suite, c'est ce qui rend un site dynamique depuis le client*/

var slides = document.getElementsByClassName("slides"); //On capture toutes nos classes/slides
var dots = document.getElementsByClassName("point");

var indiceSlide = 1; //On affiche dès le lancement de notre page, la première slide

afficherSlide(indiceSlide);

function incrIndice()
{
	alert(indiceSlide);
	indiceSlide++; 
	afficherSlide(indiceSlide%(slides.length));
}

function SlideActuelle(indice_){
	afficherSlide(indiceSlide = indice_);
}

function afficherSlide(indice_){

	for(var i = 0; i<slides.length;i++)
		slides[i].style.display = "none"; //On masque les slides en plus pour n'en garder qu'une seule
	for (var i = 0; i < dots.length; i++)
      dots[i].className = dots[i].className.replace(" active", "");	
	//Pour varier le texte en fonction de la slide
	var titreSlide = document.getElementById("texteDyn");
	titreSlide.style.fontWeight="bold";
	switch(indice_)
	{
		case 1:
			slides[indice_-1].style.display = "block"; //On affiche une unique slide
			dots[indiceSlide-1].className += " active";
			titreSlide.textContent="Activités";
			titreSlide.style.color="black";
			break;
		case 2:
			slides[indice_-1].style.display = "block"; //On affiche une unique slide
			dots[indiceSlide-1].className += " active";
			titreSlide.textContent="Transports";
			titreSlide.style.color="white";
			break;
		case 3:
			slides[indice_-1].style.display = "block"; //On affiche une unique slide
			dots[indiceSlide-1].className += " active";
			titreSlide.textContent="Hébergement";
			titreSlide.style.color="white";
			break;
		case 4:
			slides[indice_-1].style.display = "block"; //On affiche une unique slide
			dots[indiceSlide-1].className += " active";
			titreSlide.textContent="Gastronomie";
			titreSlide.style.color="white";
			break;
	}
	
}
