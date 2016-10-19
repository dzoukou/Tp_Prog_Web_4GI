/**
 * Created by Raoul on 04/10/2016.
 */
document.forms[0].addEventListener("submit", function (event) {
    event.preventDefault();
    calculer();
})

function calculer() {
    var valeur= document.getElementsByName("nombre")[0].value;
    if(isNaN(valeur)||valeur==""){
        alert("La valeur entrée n'est pas un nombre");
        document.getElementsByName("nombre")[0].value="";
        return;
    }else {
        valeur=parseFloat(valeur);
        document.getElementsByName("nombre")[0].value="";
        document.getElementById("resultat").innerHTML="Le carré de "+"<span id='nombre'>" +
            valeur+"</span>"+" est "+"<span id='carré'>"+valeur*valeur+"</span>";
    }

}