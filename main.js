let rand = document.getElementById("rand");
let spoil = document.getElementById("spoil");
let write = document.getElementById("write");

let film = [
    {
        "titre":"OSS 117 Alerte rouge en Afrique Noire",
        "spoil":"Le chef des rebels est la femme du président Koudjo Sangawe Bamba qui va être démocratiquement élu à 84,4% des voies."
    },
    {
        "titre":"Titanic",
        "spoil":"Le Bâteau heurte un Iceberg et coule"
    },
    {
        "titre":"La Reine des Neiges",
        "spoil":"C'est l'histoire d'une princesse qui, à la fin du dessin animé est libérée et délivrée"
    }
]

let selectFilm = 0;



rand.onclick = function(){
    let long = film.length;
    selectFilm = Math.random()*long;
    selectFilm = Math.floor(selectFilm);

    write.innerHTML= film[selectFilm].titre;
    return true;
}

spoil.onclick = function(){
    if(rand){
        write.innerHTML= film[selectFilm].titre + film[selectFilm].spoil;
    }else{
        write.innerHTML = "";
    }
}