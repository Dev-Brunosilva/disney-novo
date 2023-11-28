function abrirModal(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal5(){
    const modal = document.getElementById('janela-modal5')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar5' || e.target.id == 'janela-modal5'){
            modal.classList.remove('abrir')
        }
    })
}