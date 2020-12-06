let tableauPersonnage = [];
let tableauEquipement = [];
function recupererPersonnage(formulaire){
	tableauPersonnage = [formulaire.nom.value, formulaire.sexe.value, formulaire.race.value, formulaire.classe.value];
	tableauEquipement = [formulaire.arme.value];
	return false ;
};
