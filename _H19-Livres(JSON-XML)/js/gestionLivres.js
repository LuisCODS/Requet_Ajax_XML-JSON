/*
* =============================================================================
* VAR. GLOBALUX:
* racineDOM = recoit la reference au DOM par la requete AJAX.
* tblJsonSize = recoit la taille du tableau JSON dont l'index fait sa reference.
* ===============================================================================
*/
var racineDOM = null; 
var tblJsonSize = listeLivresJSON.length;
/*
* =============================================================================
* Requette Ajax responsable pour aller chercher le fichier XML (livres.xml)
* ... et le charger en memoire. C'est la porte d'entrée de l'application,
* ...car:(<body onLoad="chargerXML();">).
* PARAMETRE: (xmlDocument) recoit la ref. du DOM de la requete si tout est ok,
*	... puis l'afecte à (racineDOM) variable global.
* =============================================================================
*/
function chargerXML(){
	$.ajax({
		url:"data/livres.xml",
		type:"GET",
		dataType:"xml"
	}).done (function(xmlDocument){
			//alert(racineDOM); si dataType:"text"
			racineDOM = xmlDocument; //racineDOM desormais pointe vers la racine du DOM
			console.log(racineDOM);
	}).fail (function(){
			alert("ERREUR");
	});
}
/*
* ======================================================================
* Affiche les données provenant du fichier XML.
* tabLivres: recoit un tableau(HTMLCollection) de Livres
* ======================================================================
*/
function listerXML()
{
	var isbn, titre, pages;
	var tabLivres = racineDOM.getElementsByTagName("livre");
	//console.log(tabLivres);//test
	var taille = tabLivres.length;
	var rep="";
	rep+="<h2>Liste des livres par XML</h2><br><br>";
	
	for (var i = 0; i < taille; i++)
	{
		// rattrapage des données par les nouds(soit par innerHTML ou firstChild.nodeValue )...
		isbn=tabLivres[i].getElementsByTagName("isbn")[0].innerHTML;
		titre=tabLivres[i].getElementsByTagName("titre")[0].firstChild.nodeValue;
		pages=tabLivres[i].getElementsByTagName("pages")[0].firstChild.nodeValue;
		
		rep+="<br>ISBN = "+isbn;
		rep+="<br>TITRE = "+titre;
		rep+="<br>PAGES = "+pages;
		rep+="<br>*****************************";
	}
	// on utilise .html à la place de .text car il doit interpreter les tags html
	$('#contenu').html(rep);
	$('#fenetre').toggle();
}
/*
* ======================================================================
* Puisque le fichier Json fournie un Objet(tableau JSON), car l'index
* ...lui fait reference, on l'utilise directement en lui demandant par
* ...exemple sa taille.Puis, on boucle sous les indices du tableau
* ... pour récuperer les valeur de chaque proprieté de l'indice courant.
* ======================================================================
*/
function listerJSON()
{	
	var reponseHTML = "<table border=1>";
		reponseHTML+="<caption>Liste des livres par JSON</caption>";
		reponseHTML+="<tr><th>ISBN</th><th>TITRE</th><th>PAGES</th></tr>";
		
	for (var i = 0; i < tblJsonSize; i++)
	{	
		// rattrapage des données par les indices...
		reponseHTML+="<tr>";
		reponseHTML+="<td>"+listeLivresJSON[i].isbn+"</td><td>"+listeLivresJSON[i].titre+"</td><td>"+listeLivresJSON[i].pages+"</td>";
		reponseHTML+="</tr>";
	}
	// on utilise .html à la place de .text car il doit interpreter les tags html
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
	var tabLivres=racineDOM.firstChild.childNodes;
	while(racineDOM.firstChild.hasChildNodes()){
		var n=racineDOM.firstChild.firstChild
		if (racineDOM.firstChild.firstChild.nodeType!=3)
		   alert(JSON.stringify(racineDOM.firstChild.firstChild.nodeValue));
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






