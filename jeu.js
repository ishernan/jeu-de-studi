const rejouer     = document.querySelector('#rejouer'); 
const de         = document.querySelector('#de'); 
const roulezDes   = document.querySelector('#roulez-des'); 
const points1     = document.querySelector('#points-1');
const points2     = document.querySelector('#points-2');
const score1      = document.querySelector('#score-1')
const score2      = document.querySelector('#score-2')
const select1     = document.querySelector('#select1');
const select2     = document.querySelector('#select2');
const enregistrer = document.querySelector('#enregistrer');
const limite      = document.querySelector('#scoreFinal');
 
let player1 = false;
let player2 = false; 
let puntos, limiteFinal, pointsCumulés1, pointsCumulés2;


roulezDes.addEventListener('click', jeuDe)

rejouer.addEventListener('click', ()=>{
  location.reload();
  //de.style.display = 'none'; 
} )
select1.addEventListener('click', selectOne);
select2.addEventListener('click', selectTwo); 
enregistrer.addEventListener('click', enregistrerPoints); 



function jeuDe () { 
  let rouler = Math.floor((Math.random() * 6) + 1 ); 

  de.style.display = 'block';
  de.src = 'images/dice-' + rouler + '.png';

  if(player1 === false && player2 === false){
    de.style.display = 'none'; 
    return alert('Choisir un joueur !');  
  } else if (player1 === true && rouler != 1) {
    points1.textContent = rouler; 
    puntos = rouler;     
  } else if(player2===true && rouler != 1){
    points2.textContent = rouler; 
    puntos = rouler;     
  } else if (player1 === true && rouler === 1){
    points1.textContent = 0; 
    selectTwo(); 
  } else if (player2 === true && rouler === 1){
      points2.textContent = 0;
      selectOne(); 
  }
  
  limiteFinal = limite.value; 

}

function selectOne(){
    select1.style.backgroundColor = "#f1a19e"; 
    select2.style.backgroundColor = "white"; 
    player1 = true;
    player2 = false;
  } 
  
function selectTwo(){
    select2.style.backgroundColor = "#f1a19e"; 
    select1.style.backgroundColor = "white"; 
    player2 = true;
    player1 = false;
  }
  
function limiteGagnant(){
  if(puntos >= limiteFinal){
   return console.log("vous avez gagné");
  }

}

function enregistrerPoints(){
  if(player1 === true){
    score1.textContent = puntos; 
    points1.textContent = 0;
    pointsCumulés1 += puntos;  
  } else if(player2 === true){
    score2.textContent = puntos; 
    points2.textContent = 0;
    pointsCumulés2 += puntos;  

  }
  limiteGagnant();
}
 
 