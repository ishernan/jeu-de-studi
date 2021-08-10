const rejouer     = document.querySelector('#rejouer'); 
const de          = document.querySelector('#de'); 
const roulezDes   = document.querySelector('#roulez-des'); 
const points1     = document.querySelector('#points-1');
const points2     = document.querySelector('#points-2');
const score1      = document.querySelector('#score-1')
const score2      = document.querySelector('#score-2')
const select1     = document.querySelector('#select1');
const select2     = document.querySelector('#select2');
const enregistrer = document.querySelector('#enregistrer');
const limite      = document.querySelector('#limiteFinal');
 
let player1 = false;
let player2 = false;
let pointsCumulés = 0;
let puntos, limiteFinal;

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
  limiteFinal = limite.value; 
  
  if(player1 === false && player2 === false){
    de.style.display = 'none'; 
    return alert('Choisir un joueur !');  
  } 
  else if (limiteFinal <= 0){
    return alert('vous devez préciser une limite valide'); 
  }  
  else if (player1 === true && rouler != 1) {
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
  
function enregistrerPoints(){
  if(player1 === true){
    pointsCumulés += puntos; 
    score1.textContent = pointsCumulés; 
    points1.textContent = 0;
    
  } else if(player2 === true){
    pointsCumulés += puntos; 
    score2.textContent = pointsCumulés; 
    points2.textContent = 0;
   
  } 
  // if(pointsCumulés >= limiteFinal){
  //   //alert('ganamos'); 
  //   let gagnant = document.getElementById('gagnant'); 
  //   gagnant.classList.add('gagnant');
  //  }

}
 
 