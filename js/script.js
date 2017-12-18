// /*document.getElementsBy... -> Document Object Model : le JS capture les propriétés du CSS
// pour changer ses propriétés par la suite, c'est ce qui rend un site dynamique depuis le client*/

// var slides = document.getElementsByClassName("slides"); //On capture toutes nos classes/slides
// var dots = document.getElementsByClassName("point");
// var indiceSlide = 0; //On affiche dès le lancement de notre page, la première slide
// var timer = setInterval(incrPicture,5000);//Toutes les 5 secondes, la prochaine slide sera affichée

// SlideSelect(indiceSlide);

// function SlideSelectedByUser(indice_)//S'il y a clic de l'utilisateur, le timer se remet à 0
// {
	// clearInterval(timer);
	// timer = setInterval(incrPicture,5000);
	// SlideSelect(indice_);
// }

// function SlideSelect(indice_){
	
	// afficherSlide(indiceSlide = indice_);
// }

// function afficherSlide(indice_){

	// for(var i = 0; i<slides.length;i++)
		// slides[i].style.display = "none"; //On masque les slides en plus pour n'en garder qu'une seule
	// for (var i = 0; i < dots.length; i++)
      // dots[i].className = dots[i].className.replace(" active", "");	
	//Pour varier le texte en fonction de la slide
	// var titreSlide = document.getElementById("texteDyn");

	// switch(indice_)
	// {
		// case 0:
			// slides[indice_].style.display = "block"; //On affiche une unique slide
			// dots[indice_].className += " active";
			// titreSlide.textContent="Activités";
			// titreSlide.style.color="black";
			// break;
		// case 1:
			// slides[indice_].style.display = "block"; //On affiche une unique slide
			// dots[indice_].className += " active";
			// titreSlide.textContent="Transports";
			// titreSlide.style.color="white";
			// break;
		// case 2:
			// slides[indice_].style.display = "block"; //On affiche une unique slide
			// dots[indice_].className += " active";
			// titreSlide.textContent="Hébergement";
			// titreSlide.style.color="white";
			// break;
		// case 3:
			// slides[indice_].style.display = "block"; //On affiche une unique slide
			// dots[indice_].className += " active";
			// titreSlide.textContent="Gastronomie";
			// titreSlide.style.color="white";
			// break;
	// }
// }

// function incrPicture()
// {
	// indiceSlide++;
	// SlideSelect(indiceSlide%(slides.length));
	//alert("Modulo : " + indiceSlide + "%" + slides.length + " = " + indiceSlide%(slides.length));
// }

// function minusSlide()
// {
	// clearInterval(timer);
	// timer = setInterval(incrPicture,5000);
	// indiceSlide--;
	// var negativeTransform = (indiceSlide < 0)?(slides.length)+indiceSlide%(slides.length):indiceSlide%(slides.length);
	// SlideSelect(negativeTransform);
	
// }

// function plusSlide()
// {
	// clearInterval(timer);
	// timer = setInterval(incrPicture,5000);
	// indiceSlide++;
	// SlideSelect(indiceSlide%(slides.length));
// }

