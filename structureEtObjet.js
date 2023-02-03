    var click = false;
    var favoriteMusiquee = false;
    var purchase = false;
    let ListOfMusic = '';
    const media1 = window.matchMedia("(max-width: 1000px)");
    const media2 = window.matchMedia("(max-min: 1000px)");
    const titre = document.querySelector("p");
    const navBarResponsive = document.querySelector('.menuResponsiveNone')
    const logoMrBaad = document.querySelector('.logo')
    
    logoMrBaad.addEventListener("click", () => {
            navBarResponsive.classList.toggle('menuResponsive');
        }
    );

//         // gestion du responsive en JS
// window.onload = function(){
//     if(media1.matches){
//         titre.style.color = "green";
//     } 
//     else (media2.matches) {
//         titre.style.color = "yellow";
//     }
// }

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
var musique1 = new musique ("Ghetto'Land","Landy",2022,"Rap/Cité","2:22","./Images/cover/Musique0.png","Musiques/Musique0.mp3", false, false)
var musique2 = new musique ("Madinina","Yeahman'C",2002,"Doux","1:30","./Images/cover/Musique1.png","Musiques/Musique0.mp3",false, false)
var musique3 = new musique ("Guyana","Flexi",1998,"Rap","1:30","./Images/cover/Musique2.png","Musiques/Musique0.mp3",false, false)
var musique4 = new musique ("Chaud","Savage Hooli",2000,"Doux","1:30","./Images/cover/Musique0.png","Musiques/Musique0.mp3",false, false)
var musique5 = new musique ("Street Life","Gang'shit",2000,"Doux","1:30","./Images/cover/Musique1.png","Musiques/Musique0.mp3",false, false)
var musique6 = new musique ("Shatta'ting","Paille",2000,"Doux","1:30","./Images/cover/Musique2.png","Musiques/Musique0.mp3",false, false)
var musique7 = new musique ("Gwada","Kery James",2000,"Doux","1:30","./Images/cover/Musique0.png","Musiques/Musique0.mp3",false, false)
// --- fin de la création des objets musique

// création du tableau qui viendra accueillir nos musiques
let musiquesTableau=[]
let musiquesFavoriteTableau=[]
let musiquesPurchaseTableau=[]

// Ici ⬇⬇⬇ nous mettons les musiques créé dans notre tableau vide du dessus
musiquesTableau.push(musique1, musique2, musique3,musique4, musique5, musique6, musique7)

var texteAffiché = "MDN";
var URL = "https://developer.mozilla.org/";
var listeee = document.querySelector('.table')

function musiqueList(){
    if (click === true) {
        console.log("haha");
    } else {
        musiquesTableau.forEach(Music =>
            ListOfMusic +=
            `<section>
                        <table class="table">
                                <tr class="d-flex align-items-center ligneMusique">
                                    <th scope="row" style="padding: 30px; border:0px"><img src="${Music.cover}" alt=""></th>
                                    <td style="padding: 30px; border:0px"><img id="playButton1" src="Images/Icone/play.png" onclick="buttonPlayFunc()" alt=""></td>
                                    <td style="padding: 30px; border:0px"><p id="titreMusique">${Music.titre}<em id="artisteMusique"><br>${Music.artiste}</em></p></td>
                                    <td style="padding: 30px; border:0px"><p class="genre">${Music.genre}</p></td>
                                    <td style="padding: 30px; border:0px"><p class="time">${Music.temps}</p></td>
    
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
                                        
                                        </tr>
                    </table>
            </section>`
                    )
        document.getElementById('IDElementHtmlTest').innerHTML = ListOfMusic
        document.getElementById("listeMusique").style.display = "block";
    }
    
    click = true;
}
function contactMoi(){
    contactMe =
            `<div class="formulaireInput">
            <p>Nous contacter :</p>
          
            <div>
                <img src="Images/Icone/Icon_Contact_page/firstname.png" alt="">
                <input type="text" id="firstName" placeholder="Prénom">
            </div>
            <div>
                <img src="Images/Icone/Icon_Contact_page/Name.png" alt="">
                <input type="text" id="name" placeholder="Nom">
            </div>
          
            <div>
                <img src="Images/Icone/Icon_Contact_page/email.png" alt="">
                <input type="email" id="email" placeholder="E-mail">
            </div>
            <div>
                <p>Produit(s) concerné(s) :</p>
            </div>
            <div class="ChoixDonut">
                <div>
                    <p>Instrumental</p>
                    <input type="checkbox" id="Donut1" placeholder="Quantité" aria-label="donut1">
                </div>
          
                <div>
                    <p>Photos/Vidéos</p>
                    <input type="checkbox" id="Donut2" placeholder="Quantité">
                </div>
          
            </div>
          
                        <div>
                            <img src="Images/Icone/Icon_Contact_page/description.png" alt="">
                            <input type="text" id="description" minlength="10" maxlength="158" placeholder="Descritpion de ta demande">
                        </div>
          
                        <div class="boutton">
                            <button type="submit" onclick= "fermetureZoneMessage()" id="buttonEnvoyéOff">
                                <p id="messageEnvoyee">
                                    <p id="envoyerParagraphe">Envoyer</p>
                                </p>
                            </button>
                        </div>
          </div>`
        document.getElementById('emplacementPartieContact').innerHTML = contactMe
        document.getElementById("contactMoiZone").style.display = "block"
        document.getElementById("buttonEnvoyéOff").id = "buttonEnvoyéOn";
}


function fermetureZoneMessage() {
    contactMe =
    `<p>Message envoyé</p>`


    messageEnvoye = 
        alert("Message envoyé !")
        document.getElementById('messageEnvoyee').innerHTML = contactMe
        document.getElementById("envoyerParagraphe").style.display = "none";
}


function isFavorite(){
    var favoriteMusiquee = true;
    musiquesTableau.forEach(Music =>{
        Music.favorite = true;
        if (Music.favorite == true)
                    {
                            musiquesFavoriteTableau.push(Music.titre);
                            console.log("favoriteTrue");
                            console.log(musiquesFavoriteTableau);
                    }
        else
                    {
                            console.log("favoriteFalse");
                    }
    }
    
    )
    document.getElementById('IDElementHtmlTest').innerHTML = ListOfMusic
    document.getElementById("listeMusique").style.display = "block";
} 

function isNoFavorite(){
    var favoriteMusiquee = false;
    console.log(favoriteMusiquee);
}




// var ecranLargeur = window.innerWidth
// var ecranLongueur = window.innerHeight
// if (ecranLargeur > 800) {
//     console.log("kokel");
// } else {
//     console.log("wopwopwop");
//     document.getElementsByClassName("navText").innerHTML = "555px";
// }

