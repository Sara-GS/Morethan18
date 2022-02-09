let age = document.getElementById('age');
let button = document.getElementById('continue');

button.addEventListener('click', ()=>{
  
  if(age.value >= 18){
   alert('Ya puedes conducir'); 
  }else{
   alert("Aún no tienes 18 años"); 
  }
}); 