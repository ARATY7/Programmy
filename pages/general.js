// Date : 04.01.2021
// Auteur : Noé Henchoz - 300211
// Descriptif : Ce fichier est le code JavaScript contenu dans le site développé
//              en HTML par Noé Henchoz lors du module 101 à l'EMF.

// La fonction headerResponsive() permet d'ajouter un complément de
// class " responsive" pour que l'on puisse éditer cette classe en
// CSS par la suite lors du clic sur le hamburger responsive.
function headerResponsive() {
	// On récupère d'abord l'id "navbar" dans la variable "menu".
	var menu = document.getElementById('navbar');
	// Si la class de "menu" est strictement égale à "navigation" (c'est-à-dire
	// que le menu n'est pas responsive, la fenêtre est plus grande que 1130px),
	if (menu.className === 'navigation') {
		// alors on ajoute " responsive" à la class "navigation" ce qui nous donne
		// maintenant : "navigation responsive",
		menu.className += ' responsive';
		// sinon, la class reste "navigation".
	} else {
		menu.className = 'navigation';
	}
}

// La fonction getDateHours() retourne la date du jour, l'heure et aussi les
// minutes que j'ai affichées dans mon footer.
function getDateHours() {
	// On déclare et affecte une variable à un format de date.
	var today = new Date();
	// On déclare et affecte les variables qui vont contenir le jour, le mois, etc.
	// recupéré avec les fonctions .getX().
	var day = today.getDate();
	// Nous faisons +1 à la fonction getMonth() car celle-ci détermine que le
	// mois de janvier est le 0. En ajoutant 1, la réglarité des mois devient
	// correcte.
	var month = today.getMonth() + 1;
	var year = today.getFullYear();
	var hours = today.getHours();
	var minutes = today.getMinutes();

	// On ajoute ensuite une condition : Si le jour, mois, heures ou minutes
	// sont en dessous de 10, alors on ajoute un 0 juste devant pour une
	// question d'harmonie.
	if (day < 10) {
		day = '0' + day;
	}
	if (month < 10) {
		month = '0' + month;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	// On déclare et affecte encuite une variable dateHours qui contient la date,
	// le mois, l'année, heures et minutes. On fait une concaténation du tout
	// avec des espaces ce qui donnera un résultat correct.
	var dateHours = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
	document.getElementById('datum').innerHTML = dateHours;
}

// Création de la fonction sleep() qui permet de définir un temps de pause
// entre chaque exécution de la fonction
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// la fonction async permet de syncroniser la fonction qu'elle contient qui se
// charge avec le body
async function start() {
	// Création d'une boucle infinie pour que le JavaScript se recharge tout les
	// X temps.
	while (true) {
		// Ici, j'appelle mes fonctions dont getDateHours() qui va se répéter à
		// l'infini avec des pauses de 10ms générée par la fonction sleep().
		getDateHours();
		await sleep(10);
	}
}
