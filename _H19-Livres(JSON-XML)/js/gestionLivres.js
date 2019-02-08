// GLOBAL
var listeLivres = null; 
/*
* ======================================================================
* Requette Ajax responsable pour aller chercher le fichier XML (livres.xml)
* ... et le charger en memoire. C'est la porte d'entrée de l'application,
* ...car:(<body onLoad="chargerXML();">).
* PARAMETRE: (liste) recoit les donnés de la requete si tout est ok,
*	... puis l'afecte à (listeLivres) variable global.
* ======================================================================
*/
function chargerXML(){
	$.ajax({
		url:"data/livres.xml",
		type:"GET",
		dataType:"xml"
	}).done (function(liste){
			//alert(listeLivres); si dataType:"text"			
			listeLivres = liste; //afecte la var global
	}).fail (function(){
			alert("ERREUR");
	});
}
/*
* ======================================================================
* 
* ======================================================================
*/
function listerXML(){
	var isbn, titre, pages;
	var tabLivres=listeLivres.getElementsByTagName("livre");
	var taille=tabLivres.length;
	var rep="";
	rep+="<h2>Liste des livres par XML</h2><br><br>";
	for (var i=0;i<taille;i++){
		isbn=tabLivres[i].getElementsByTagName("isbn")[0].firstChild.nodeValue;
		titre=tabLivres[i].getElementsByTagName("titre")[0].firstChild.nodeValue;
		pages=tabLivres[i].getElementsByTagName("pages")[0].firstChild.nodeValue;	
		rep+="<br>ISBN = "+isbn;
		rep+="<br>TITRE = "+titre;
		rep+="<br>PAGES = "+pages;
		rep+="<br>*****************************";
	}
	$('#contenu').html(rep);
	$('#fenetre').toggle();
}
/*
* ======================================================================
* Puisque le fichier Json fournie un Objet(tableau JSON), 
* ... on l'utilise directement en lui demandant par exemple sa taille.
* Tel que montré ci-bas! Ensuite, on boucle sous les indices du tableau
* ... pour récuperer les valeur de chaque proprieté de l'indice courant.
* ======================================================================
*/
function listerJSON()
{
	var taille = listeLivresJSON.length;
	var reponseHTML = "<table border=1>";
		reponseHTML+="<caption>Liste des livres par JSON</caption>";
		reponseHTML+="<tr><th>ISBN</th><th>TITRE</th><th>PAGES</th></tr>";
		
	for (var i = 0; i < taille; i++)
	{		
		reponseHTML+="<tr>";
		reponseHTML+="<td>"+listeLivresJSON[i].isbn+"</td><td>"+listeLivresJSON[i].titre+"</td><td>"+listeLivresJSON[i].pages+"</td>";
		reponseHTML+="</tr>";
	}
	// on utilise .html à la place de text car il doit interpreter les tags html
	$('#contenu').html(reponseHTML);
	$('#fenetre').toggle();
}
/*
* ======================================================================
* POUR VOUS AMUSER...
*
* ======================================================================
*/
function XMLtoJSON(){
	rep="[";
	var tabLivres=listeLivres.firstChild.childNodes;
	while(listeLivres.firstChild.hasChildNodes()){
		var n=listeLivres.firstChild.firstChild
		if (listeLivres.firstChild.firstChild.nodeType!=3)
		   alert(JSON.stringify(listeLivres.firstChild.firstChild.nodeValue));
			n=n.nextSibling();
	}
		
	alert(tabLivres.length);
	for(var i=0;i<tabLivres.length;i++){
		
		/*if(tabLivres[i].firstChild.nodeType === 1){
			rep+='{"'+tabLivres[i].firstChild.nodeName+'":'+tabLivres[i].firstChild.firstChild.nodeValue+',';
		}*/
	}
	alert(rep);
}






