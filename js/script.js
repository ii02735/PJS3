/*document.getElementsBy... -> Document Object Model : le JS capture les propriétés du CSS
pour changer ses propriétés par la suite, c'est ce qui rend un site dynamique depuis le client*/

var slides = document.getElementsByClassName("slides"); //On capture toutes nos classes/slides
var dots = document.getElementsByClassName("point");
var indiceSlide = 0; //On affiche dès le lancement de notre page, la première slide
var timer = setInterval(incrPicture,5000);//Toutes les 5 secondes, la prochaine slide sera affichée

SlideSelect(indiceSlide);

function SlideSelectedByUser(indice_)//S'il y a clic de l'utilisateur, le timer se remet à 0
{
	clearInterval(timer);
	timer = setInterval(incrPicture,5000);
	SlideSelect(indice_);
}

function SlideSelect(indice_){
	
	afficherSlide(indiceSlide = indice_);
}

function afficherSlide(indice_){

	for(var i = 0; i<slides.length;i++)
		slides[i].style.display = "none"; //On masque les slides en plus pour n'en garder qu'une seule
	for (var i = 0; i < dots.length; i++)
      dots[i].className = dots[i].className.replace(" active", "");	
	//Pour varier le texte en fonction de la slide
	var titreSlide = document.getElementById("texteDyn");

	switch(indice_)
	{
		case 0:
			slides[indice_].style.display = "block"; //On affiche une unique slide
			dots[indice_].className += " active";
			titreSlide.textContent="Activités";
			titreSlide.style.color="black";
			break;
		case 1:
			slides[indice_].style.display = "block"; //On affiche une unique slide
			dots[indice_].className += " active";
			titreSlide.textContent="Transports";
			titreSlide.style.color="white";
			break;
		case 2:
			slides[indice_].style.display = "block"; //On affiche une unique slide
			dots[indice_].className += " active";
			titreSlide.textContent="Hébergement";
			titreSlide.style.color="white";
			break;
		case 3:
			slides[indice_].style.display = "block"; //On affiche une unique slide
			dots[indice_].className += " active";
			titreSlide.textContent="Gastronomie";
			titreSlide.style.color="white";
			break;
	}
}

function incrPicture()
{
	indiceSlide++;
	SlideSelect(indiceSlide%(slides.length));
	//alert("Modulo : " + indiceSlide + "%" + slides.length + " = " + indiceSlide%(slides.length));
	/*La technique du modulo
		
		Le reste nous permet de ne pas dépasser les dimensions du tableau.
		Supposons que notre tableau est de longueur 4 => {0,1,2,3}
		Exemples :
		0 mod 4 = 0
		1 mod 4 = 1
		2 mod 4 = 2
		3 mod 4 = 3
		4 mod 4 = 0 --> On revient au début du tableau (il n'y a aucun reste)
		5 mod 4 = 1
		6 mod 4 = 2
		7 mod 4 = 3
		8 mod 4 = 0 --> On revient au début du tableau
		et ainsi de suite...
	*/
}

function minusSlide()
{
	clearInterval(timer);
	timer = setInterval(incrPicture,5000);
	indiceSlide--;
	/*En mathématiques
	  -1 mod 4 = 3
	  Or en JS
	  -1 mod 4 = -1
	  On corrige cette erreur avec negativeTransform
	  Exemple :
	  -1 mod 4 = -1
	  -->negativeTransform = -1 + slides.length = 3
	*/
	var negativeTransform = (indiceSlide < 0)?(slides.length)+indiceSlide%(slides.length):indiceSlide%(slides.length);
	SlideSelect(negativeTransform);
	
}

function plusSlide()
{
	clearInterval(timer);
	timer = setInterval(incrPicture,5000);
	indiceSlide++;
	SlideSelect(indiceSlide%(slides.length));
}

