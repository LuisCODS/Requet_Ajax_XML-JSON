// GLOBAL
var listeLivres=null; 


/*
*
* ======================================================================
* Requette Ajax responsable pour aller chercher le fichier XML (livres.xml).

* ======================================================================
*
*/
function chargerXML(){
	$.ajax({
		url:"data/livres.xml",
		type:"GET",
		dataType:"xml"
	}).done (function(liste){
			//alert(listeLivres); si dataType:"text"
			listeLivres=liste;
	}).fail (function(){
			alert("ERREUR");
	});
}
/*
*
* ======================================================================
* 
* ======================================================================
*
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
*
* ======================================================================
*
* ======================================================================
*
*/
function listerJSON(){
	var isbn, titre, pages;
	var rep="";
	var taille=listeLivresJSON.length;
	rep+="<h2>Liste des livres par JSON</h2><br><br>";
	for (var i=0;i<taille;i++){
		var unLivre=listeLivresJSON[i];
		isbn=unLivre.isbn;
		titre=unLivre.titre;
		pages=unLivre.pages;
		rep+="<br>ISBN = "+isbn;
		rep+="<br>TITRE = "+titre;
		rep+="<br>PAGES = "+pages;
		rep+="<br>*****************************";
	}
	$('#contenu').html(rep);
	$('#fenetre').toggle();
}
/*
*
* ======================================================================
* POUR VOUS AMUSER...
*
* ======================================================================
*
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






