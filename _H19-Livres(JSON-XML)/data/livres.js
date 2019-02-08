/*
* ======================================================================
* Contrairement au fichier XML, le JSON n'a pas besoin d'une requete 
* ... car il est deja referencié par index dans la tag head:
*  <script src="data/livres.js"></script>
* ======================================================================
*/

var listeLivresJSON =
[
	//Les indices...
	{"isbn":123,"titre":"Samba","pages":500},
	{"isbn":456,"titre":"Les russes","pages":200},
	{"isbn":789,"titre":"PHP pour les nuls","pages":120},
	{"isbn":112,"titre":"Web pour les experts","pages":80}
];