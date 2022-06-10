const deletePlayer = document.querySelector('.fa-trash')
Array.from(deletePlayer).forEach((element)=>{
    element.addEventListener('click',deletePlayer)
})