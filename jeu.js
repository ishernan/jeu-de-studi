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
let pointsCumulés1 = 0;
let pointsCumulés2 = 0;
let puntos, limiteFinal;

roulezDes.addEventListener('click', jeuDe)
rejouer.addEventListener('click', initialiser)
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
    de.style.display = 'none'; 
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
    pointsCumulés1 += puntos; 
    score1.textContent = pointsCumulés1; 
    points1.textContent = 0;
    selectTwo();
    de.style.display = 'none'; 
    
  } else if(player2 === true){
    pointsCumulés2 += puntos; 
    score2.textContent = pointsCumulés2; 
    points2.textContent = 0;
    selectOne(); 
    de.style.display = 'none'; 
   
  } else {
    return alert ('Enregistrez une valeur valide'); 
  }
  if(pointsCumulés1 >= limiteFinal){
    alert('Vous avez gagné la partie !'); 
    initialiser();


  } else if (pointsCumulés2 >= limiteFinal){
    alert('Vous avez gagné la partie !');
    initialiser();
  }
}
function initialiser() { 
  // select2.style.backgroundColor = "white"; 
  // select1.style.backgroundColor = "white";
  // score1.textContent = 0; 
  // score2.textContent = 0; 
  // limite.value = 0; 
  return location.reload();
 }
 
 