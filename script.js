/* window.addEventListener("load",function (){
    //ide jön a kód
})


$(document).ready(function(){
   
  }); */
//hozz létre egy listát a képekkel
// kép elég!
const LIST = [
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep5.jpg",
  "kepek/kep6.jpg",
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep5.jpg",
  "kepek/kep6.jpg",
];
const KIVALASZTOTTKEPEK = [];
let db = 0;
$(function () {
  //ide jön a kód
  /**1 .tedd ki a képeket a felső sectionbe
   * minden kép külön div-be kerüljön
   */
  const FELSOELEM = $("#felso");
  let tartalom = osszeAllit();
  FELSOELEM.append(tartalom);

  /**kisképekre kattintás */
  //fogd meg a kisképeket
  const FELSOKEPEK = $("#felso img");
  //add hozzá az eseménykezelőt ,
  FELSOKEPEK.on("click", kepreKattintas);

  // új metódus hozzáadása a lista összekeveréséhez
  kever(LIST);
});

function kepreKattintas() {
  const aktKep = event.target;
  //irasd ki a konzolra az aktuális elem src attributumát!
  console.log(aktKep.id);
  console.log($(aktKep).attr("id"));
  /**Írjuk ki, hogy hányadik képre kattintottunK?  */
  /**kicseréljk a kép src */
  aktKep.src = LIST[aktKep.id];
  KIVALASZTOTTKEPEK.push($(aktKep).attr("id"));
  db++;
  if (db == 2) {
    db = 0;
    visszafordit();
  }
}

function visszafordit() {
  //visszaállítjuk az src-t a háttérre, amelyikre kattintottunk
  console.log(KIVALASZTOTTKEPEK);

  setTimeout(function () {
    const FELSOKEPEK = $("#felso img");
    let aktkep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[0]);
    console.log(aktkep);
    $(aktkep).attr("src", "kepek/hatter.jpg");
    aktkep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[1]);
    $(aktkep).attr("src", "kepek/hatter.jpg");
    KIVALASZTOTTKEPEK.pop();
    KIVALASZTOTTKEPEK.pop();
  }, 1000);
}

function osszeAllit() {
  //**összállítjuk a szöveget, ami megjeleníti a képket */
  let txt = "";
  for (let index = 0; index < LIST.length; index++) {
    txt += `<div><img src="kepek/hatter.jpg" alt="" id="${index}"></div>`;
  }
  console.log(txt);
  return txt;
}

// uj kever metodus letrehozasa
function kever() {
  let jelenlegiIndex = LIST.length;
  let ideiglenesErtek, randomIndex;

  // Addig amig van elem amit még nem kevertünk össze
  while (jelenlegiIndex !== 0) {

    // Válasszuk ki egy random elemet
    randomIndex = Math.floor(Math.random() * jelenlegiIndex);
    jelenlegiIndex--;

    // csere aktualis elemmel
    ideiglenesErtek = LIST[jelenlegiIndex];
    LIST[jelenlegiIndex] = LIST[randomIndex];
    LIST[randomIndex] = ideiglenesErtek;

  }
  return LIST;
}
