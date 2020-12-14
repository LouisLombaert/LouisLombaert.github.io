//index 
let classe
let arme
let tableauPersonnage = [];
let objetStat = {};
let objetPersonnage = { personnage: tableauPersonnage, équipement: arme, statistique: objetStat};
let competences = [];
let vieDragon = 40;

function recupererPersonnage(formulaire){
	tableauPersonnage = [formulaire.nom.value, formulaire.sexe.value, formulaire.race.value, formulaire.classe.value];
	arme = formulaire.arme.value;
	classe = formulaire.classe.value;
	if(classe == "Archer"){
		objetStat = {dégatsMélée: 0, dégatsDistance: 4, magie: 0, vie: 15};
		competences = ["Vous tirez une flèche qui inflige des dégats", "vous tirez un puissant tir qui étourdit l'ennemi et inflige un peu de dégats"];
	}
	else if(classe == "Guerrier"){
		objetStat = {dégatsMélée: 3, dégatsDistance: 0, magie: 0, vie: 20};
		competences = ["Vous frapez vôtre adversaire et lui infliger beaucoup de dégats", "vous infligez peu de dégat mais vous regagner 2 points de vie"];
	}
	else{
		objetStat = {dégatsMélée: 0, dégatsDistance: 0, magie: 3, vie: 18};
		competences = ["Vous faites un sort de feu qui inflige beacoup de dégats", "Vous vous sognez et récuperez 4 points de vie"];
	}
	if(arme == "Arc"){
		objetStat.dégatsDistance += 3;
	}
	else if(arme == "Hache"){
		objetStat.dégatsMélée += 2
	}
	else if(arme == "Epée"){
		objetStat.dégatsMélée += 3;
	}
	else{
		objetStat.magie += 4;
	};
	objetPersonnage = { personnage: tableauPersonnage, équipement: arme, statistique: objetStat, compétences: competences};
	return false ;
};


function combat(){
	document.getElementById("introCombat").innerHTML = "<p> Cela fait maintenant 8 mois que le Royaume ne cesse de se faire attaquer par un terrible dragon. Ne savant plus quoi faire et ne supportant plus de voir son peuple se faire terroriser, le roi décide d'envoyer son meilleur combattant pour exterminer le terrible monstre! Te voilà maintenant face à la créature.</p><p>Vos compétences:<br>1: " + competences[0] + "<br>2: "+ competences[1] + "<br>Cliquez sur commencer combat";
};
function commencerCombat(){
	if(classe == "Archer"){
		while( vieDragon > 0 && objetStat.vie > 0){
			competencePersonnage = +prompt("Quelle compétence utilisez-vous? (tapez 1 ou 2)");
			if (competencePersonnage != 1 && competencePersonnage != 2){
				competencePersonnage = +prompt("Erreur, Tapez 1 ou 2 !!");
			}
			else if (competencePersonnage == 1){
				vieDragon = vieDragon - objetStat.dégatsDistance ;
				alert("vous infligez " + objetStat.dégatsDistance + " dégats au Dragon.");
			}
			else {
				vieDragon = vieDragon - 0.3 * objetStat.dégatsDistance;
				alert("vous infligez " + objetStat.dégatsDistance*0.3 + " dégats au Dragon et vous l'assommez");
				break;
			}
			let choixCompétenceDragon = (Math.random() * 2).toFixed(0)
			if(choixCompétenceDragon == 1){
				objetStat.vie = objetStat.vie - 6 ;
				alert ("le dragon crache du feu et vous inflige 6 de dégat.");
			}
			else{
				objetStat.vie = objetStat.vie - 4 ;
				alert ("le dragon vous mord et vous inflige 4 de dégat.");
			}
			alert("Vôtre vie: " + objetStat.vie + " Vie du dragon: " + vieDragon);
		};
		
	}
	else if(classe == "Guerrier"){
		while( vieDragon > 0 && objetStat.vie > 0){
			competencePersonnage = +prompt("Quelle compétence utilisez-vous? (tapez 1 ou 2)");
			if (competencePersonnage != 1 && competencePersonnage != 2){
				competencePersonnage = +prompt("Erreur, Tapez 1 ou 2 !!");
			}
			else if (competencePersonnage == 1){
				vieDragon = vieDragon - objetStat.dégatsMélée ;
				alert("vous infligez " + objetStat.dégatsMélée + " dégats au Dragon.");
			}
			else {
				vieDragon = vieDragon - 0.5 * objetStat.dégatsMélée;
				objetStat.vie += 2
				alert("vous infligez " + objetStat.dégatsMélée*0.5 + " dégats au Dragon et vous regagnez deux points de vie");
				
			}
			let choixCompétenceDragon = (Math.random() * 2).toFixed(0)
			if(choixCompétenceDragon == 1){
				objetStat.vie = objetStat.vie - 6 ;
				alert ("le dragon crache du feu et vous inflige 6 de dégat.");
			}
			else{
				objetStat.vie = objetStat.vie - 4 ;
				alert ("le dragon vous mord et vous inflige 4 de dégat.");
			}
			alert("Vôtre vie: " + objetStat.vie + " Vie du dragon: " + vieDragon);
		};
	}
	else if(classe == "Sorcier"){
		while( vieDragon > 0 && objetStat.vie > 0){
			competencePersonnage = +prompt("Quelle compétence utilisez-vous? (tapez 1 ou 2)");
			if (competencePersonnage != 1 && competencePersonnage != 2){
				competencePersonnage = +prompt("Erreur, Tapez 1 ou 2 !!");
			}
			else if (competencePersonnage == 1){
				vieDragon = vieDragon - objetStat.magie ;
				alert("vous infligez " + objetStat.magie + " dégats au Dragon.");
			}
			else {
				objetStat.vie += 4;
				alert(" vous regagnez quatre points de vie");
				
			}
			let choixCompétenceDragon = (Math.random() * 2).toFixed(0)
			if(choixCompétenceDragon == 1){
				objetStat.vie = objetStat.vie - 6 ;
				alert ("le dragon crache du feu et vous inflige 6 de dégat.");
			}
			else{
				objetStat.vie = objetStat.vie - 4 ;
				alert ("le dragon vous mord et vous inflige 4 de dégat.");
			}
			alert("Vôtre vie: " + objetStat.vie + " Vie du dragon: " + vieDragon);
		};
	}
}
