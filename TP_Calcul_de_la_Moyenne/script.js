/**
 * Created by Raoul on 05/10/2016.
 */
var matiere;
var note;
var i = 0;

function reception_info(val1, val2) {
    var bool = false;
    do {
        matiere = prompt("Entrer le nom de la matière: ", val1);
        if (matiere == "") {
            alert("Le nom de la matière  est invalide");
        } else bool = true;
    } while (bool == false);
    bool = false;
    if (matiere != null) {
        do {
            note = prompt("Entrer la note: ", val2);
            if (isNaN(note)) {
                alert("La note doit être un nombre");
            } else {
                if (note < 0 || note > 20) {
                    alert("La note est dans l'intervale [0,20]");
                } else bool = true;
            }
        } while (bool == false);
    }
}

function ajouter() {
    reception_info("", "");
    if (matiere != null && note != null) {
        inserer(matiere, note);
    }
}

function ajoutmodif(node) {
    node.addEventListener("click", function (e) {
        modifier(e.target);
    });
}

function ajoutsuppr(node) {
    node.addEventListener("click", function (e) {
        supprimer(e.target);
    });
}

function inserer(matiere, note) {
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + matiere + "</td>" +
        "<td>" + note + "</td>" +
        "<td>" +
        "<img src='images/crayon_supprimer.png' alt='modifier' id='modifier" + i + "' usemap='#ma_map" + i + "'>" +
        "<map name='ma_map" + i + "'>" +
        "<area class='img_cray' shape='circle' coords='21,21,21' title='Modifier' alt='Modifier'/>" +
        "<area class='img_croix' shape='circle' coords='61,21,21' alt='supprimer' title='supprimer'/>" +
        "</map>" +
        "</td>";
    document.getElementById("table").children[1].appendChild(tr);
    ajoutmodif(tr.getElementsByClassName("img_cray")[0]);
    ajoutsuppr(tr.getElementsByClassName("img_croix")[0]);
    i++;
    Actualiser();
}

function modifier(element) {
    var tab = element.parentElement.parentElement.parentElement.children;
    reception_info(tab[0].innerHTML, tab[1].innerHTML);
    if ((matiere != null) && (note != null)) {
        tab[0].innerHTML = matiere;
        tab[1].innerHTML = note;
        Actualiser();
    }

}

function supprimer(element) {
    document.getElementsByTagName("tbody")[0].removeChild(element.parentElement.parentElement.parentElement);
    Actualiser();
}

function Actualiser() {
    var tbody = document.getElementById("table").children[1];
    var td_moy = document.getElementById("moyenne");
    if (tbody.children.length == 0) {
        td_moy.innerHTML = "Non Définie";
        td_moy.style.color = "red";
        return;
    }
    var moyenne = 0;
    for (var i = 0; i < tbody.children.length; i++) {
        moyenne += parseFloat(tbody.children[i].children[1].innerHTML);
    }
    moyenne /= (tbody.children.length);
    moyenne = moyenne.toFixed(2);
    td_moy.innerHTML = moyenne;
    if (moyenne < 10) {
        td_moy.style.color = "red";
    } else {
        td_moy.style.color = "green";
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("plus").addEventListener("click", function (e) {
        ajouter();
    });
    inserer("Analyse", 17);
    inserer("IHM", 16);
    inserer("IA", 20);
    inserer("P. Web", 20);
});