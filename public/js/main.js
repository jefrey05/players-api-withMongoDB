const deleteText = document.querySelectorAll('.fa-trash')
Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click',deletePlayer)
})

async function deletePlayer(){
    const pName = this.parentNode.childNodes[1].innerText;
    const national = this.parentNode.childNodes[3].innerText;

    try{
        const response = await(fetch('/deletePlayer',{
            method: 'delete',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                'playerName':pName,
                'nationality':national
            })
        }))
        const data = await response.json();
        console.log(data);
        location.reload()
    }catch(err){
        console.log(err)
    }
}

const deletePlayer = document.querySelector('.fa-trash')
Array.from(deletePlayer).forEach((element)=>{
    element.addEventListener('click',deletePlayer)
})

