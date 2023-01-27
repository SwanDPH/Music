    var click = false;
    var favoriteMusiquee = false;
    let ListOfMusic = '';
    
    // création de la structure "musique" (le squelette des objets)
function musique (titre, artiste, annee, genre, temps, cover, mp3, favorite, purchase){
    this.titre = titre
    this.artiste = artiste
    this.annee = annee
    this.genre = genre
    this.temps = temps
    this.cover = cover
    this.mp3 = mp3
    this.favorite = favorite
    this.purchase = purchase
}
// --- fin de la création de la structure "musique" (le squelette des objets)

// création des objets musique par rapport à la structure créé précédement
var musique1 = new musique ("Ghetto'Land","Landy",2022,"Rap/Cité","2:22","Images/cover/Musique0.png","Musiques/Musique0.mp3", false, false)
var musique2 = new musique ("Madinina","Yeahman'C",2002,"Doux","1:30","Images/cover/Musique1.png","Musiques/Musique0.mp3",false, false)
var musique3 = new musique ("Guyana","Flexi",1998,"Rap","1:30","Images/cover/Musique2.png","Musiques/Musique0.mp3",false, false)
var musique4 = new musique ("Chaud","Savage Hooli",2000,"Doux","1:30","Images/cover/Musique0.png","Musiques/Musique0.mp3",false, false)
var musique5 = new musique ("Street Life","Gang'shit",2000,"Doux","1:30","Images/cover/Musique1.png","Musiques/Musique0.mp3",false, false)
var musique6 = new musique ("Shatta'ting","Paille",2000,"Doux","1:30","Images/cover/Musique2.png","Musiques/Musique0.mp3",false, false)
var musique7 = new musique ("Gwada","Kery James",2000,"Doux","1:30","Images/cover/Musique0.png","Musiques/Musique0.mp3",false, false)
// --- fin de la création des objets musique

// création du tableau qui viendra accueillir nos musiques
let musiquesTableau=[]
let musiquesFavoriteTableau=[]
let musiquesPurchaseTableau=[]

// Ici ⬇⬇⬇ nous mettons les musiques créé dans notre tableau vide du dessus
musiquesTableau.push(musique1, musique2, musique3,musique4, musique5, musique6, musique7)

function musiqueList(){
    click = true;
    musiquesTableau.forEach(Music =>
        
        ListOfMusic +=
        `<section >
                    <table class="table ligneMusique">
                            <tr class="d-flex align-items-center">
                                <th scope="row" style="padding: 30px; border:0px"><img src="${Music.cover}" alt=""></th>
                                <td style="padding: 30px; border:0px"><img id="playButton1" src="Images/Icone/play.png" onclick="buttonPlayFunc()" alt=""></td>
                                <td style="padding: 30px; border:0px"><p id="titreMusique">${Music.titre}<em id="artisteMusique"><br>${Music.artiste}</em></p></td>
                                <td style="padding: 30px; border:0px"><p class="genre">${Music.genre}</p></td>
                                <td style="padding: 30px; border:0px"><p class="time">${Music.temps}</p></td>
                                <td style="padding: 30px; border:0px"><p class="favorite">${Music.favorite}</td>

                                <td style="padding: 30px; border:0px">
                                    <span class="css-button-icon">
                                        <i class="fa fa-cart-arrow-down" style="font-size:30px" onMouseOver="$(this).css('color', '#b6afaf');" onmouseout="$(this).css('color', '#e0dede');" ondblclick="$(this).css('color', '#6efc7b');"></i>
                                    </span>
                                </td>


                                <td style="padding: 30px; border:0px">
                                    <span class="css-button-icon">
                                        <i  class="fa fa-download" style="font-size:30px;" onMouseOver="$(this).css('color', '#b6afaf');" onmouseout="$(this).css('color', '#e0dede');" ondblclick="$(this).css('color', '#6efc7b');"></i>
                                    </span>
                                </td>


                                <td style="padding: 30px; border:0px">
                                    <span class="css-button-icon">
                                        <i class="fa fa-download" style="font-size:30px" onMouseOver="$(this).css('color', '#b6afaf');" onmouseout="$(this).css('color', '#e0dede');" ondblclick="$(this).css('color', '#6efc7b');"></i>
                                    </span>
                                </td>
                                    
                                    </tr>
                </table>
        </section>`
                )
    document.getElementById('IDElementHtmlTest').innerHTML = ListOfMusic
    document.getElementById("listeMusique").style.display = "block";
}

function isFavorite(){
    let bouttonFavori = document.getElementsByClassName("favorite");
    var favoriteMusiquee = true;
    let musiqueListe = ListOfMusic;
    musiquesTableau.forEach(Music =>{
        Music.favorite = true;
        if (Music.favorite == true) {
                musiquesFavoriteTableau.push(Music.titre);
                console.log("favoriteTrue");
                console.log(musiquesFavoriteTableau);
        } else {
                console.log("favoriteFalse");
        }
    }
    
    )
    

    document.getElementById('IDElementHtmlTest').innerHTML = ListOfMusic
    document.getElementById("listeMusique").style.display = "block";
} 

// var ecranLargeur = window.innerWidth
// var ecranLongueur = window.innerHeight
// if (ecranLargeur > 800) {
//     console.log("kokel");
// } else {
//     console.log("wopwopwop");
//     document.getElementsByClassName("navText").innerHTML = "555px";
// }

