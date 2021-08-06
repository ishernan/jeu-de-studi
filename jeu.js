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
 
let player1, player2, puntos;


roulezDes.addEventListener('click', ()=>{
  jeuDe(); 
})

rejouer.addEventListener('click', ()=>{
  location.reload();
  //de.style.display = 'none'; 
} )

select1.addEventListener('click', ()=>{
  select1.style.backgroundColor = "#f1a19e"; 
  select2.style.backgroundColor = "white"; 
  player1 = true;
  player2 = false;
  //points2.textContent = 0; 

  
})
select2.addEventListener('click', ()=>{
  select2.style.backgroundColor = "#f1a19e"; 
  select1.style.backgroundColor = "white"; 
  player2 = true;
  player1 = false;
  //points1.textContent = 0; 
})

enregistrer.addEventListener('click', ()=>{
  if(player1 === true){
    score1.textContent = puntos; 
    points1.textContent = 0;
  } else if(player2 === true){
    score2.textContent = puntos; 
    points2.textContent = 0;

  }
  
  
})

function jeuDe () { 
  let rouler = Math.floor((Math.random() * 6) + 1 ); 

  de.style.display = 'block';
  de.src = 'images/dice-' + rouler + '.png';
  
  if(player1 === true && rouler != 1) {
    points1.textContent = rouler; 
    puntos = rouler;     
  } else if(player2===true && rouler != 1){
    points2.textContent = rouler; 
    puntos = rouler;     
    } else if (player1 === true && rouler === 1){
      points1.textContent = 0; 
    } else if (player2 === true && rouler === 1){
      points2.textContent = 0;
  }


}

  

 
 