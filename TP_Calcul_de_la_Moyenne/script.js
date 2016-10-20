/**
 * Created by Raoul on 05/10/2016.
 */
var matiere;
var note;
var moyenne= document.getElementById("moyenne");

function modifier(element){
    var tab = element.parentElement.parentElement.parentElement.children;
    reception_info(tab[0].innerHTML,tab[1].innerHTML);
    if(matiere!=null&&note!=null) {
        tab[0].innerHTML = matiere;
        tab[1].innerHTML = note;
    }
    Actualiser();
}

var i=3;

function ajouter(){
    reception_info("","");
    if(matiere!=null&&note!=null) {
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>" + matiere + "</td>" +
            "<td>" + note + "</td>" +
            "<td>" +
            "<img src='images/crayon_supprimer.png' alt='modifier' id='modifier" + i + "' usemap='#ma_map" + i + "'>" +
            "<map name='ma_map" + i + "' id='modif'>" +
            "<area id='crayon" + i + "' shape='circle' coords='24,22,23' title='Modifier' alt='Modifier'/>" +
            "<area id='supprimer" + i + "' shape='circle' coords='74,22,23' alt='supprimer' title='supprimer'/>" +
            "</map>" +
            "</td>";
        document.getElementById("table").children[1].appendChild(tr);

        document.getElementById("crayon" + i).addEventListener("click", function (e) {
            e.preventDefault;
            modifier(e.target);
        });

        document.getElementById("supprimer" + i).addEventListener("click", function (e) {
            supprimer(e.target);
            e.preventDefault;
        });
        i++;
    }
    Actualiser();
}

function supprimer(element){
    element.parentElement.parentElement.parentElement.remove();
    Actualiser();
}

function reception_info(val1,val2){
    var bool=false;
    do {
        matiere = prompt("Entrer le nom de la matière: ",val1);
        if (matiere == "") {
            afficher("Le nom de la matière  est invalide");
        }else bool=true;
    }while (bool==false);
    bool=false;
    do {
        note = prompt("Entrer la note: ",val2);
        if (isNaN(note)) {
            afficher("La note doit être un nombre");
        }else {
            if (note < 0 || note > 20) {
                afficher("La note est dans l'intervale [0,20]");
            }else bool=true;
        }
    }while (bool==false);
    note=parseFloat(note);
}

function afficher(message){
    alert(message);
}

function Actualiser() {
    var tbody=document.getElementById("table").children[1];
    var td_moy=document.getElementById("moyenne");
    if(tbody.children.length==0){
        td_moy.innerHTML="Non Définie";
        td_moy.style.color="red";
        return;
    }
    var moyenne=0;
    for(var i=0;i<tbody.children.length;i++){
        moyenne+=parseFloat(tbody.children[i].children[1].innerHTML);
    }
    moyenne/=(tbody.children.length);
    td_moy.innerHTML=moyenne;
    if(moyenne<10){
        td_moy.style.color="red";
    }else{
        td_moy.style.color="green";
    }
}

document.getElementById("plus").addEventListener("click",function (e) {
    e.preventDefault();
    ajouter();
})

document.getElementById("crayon").addEventListener("click",function(e){
    e.preventDefault;
    modifier(e.target);
});

document.getElementById("supprimer").addEventListener("click",function(e){
    supprimer(e.target);
    e.preventDefault;
});

document.getElementById("crayon1").addEventListener("click",function(e){
    e.preventDefault;
    modifier(e.target);
});

document.getElementById("supprimer1").addEventListener("click",function(e){
    supprimer(e.target);
    e.preventDefault;
});

document.getElementById("crayon2").addEventListener("click",function(e){
    e.preventDefault;
    modifier(e.target);
});

document.getElementById("supprimer2").addEventListener("click",function(e){
    supprimer(e.target);
    e.preventDefault;
});

Actualiser();

function salut() {
    var img=document.getElementById("img");
    img.style.textAlign="left";
}
salut();