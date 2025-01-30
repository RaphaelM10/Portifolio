
/// Modo Dark - Ativar e Desativar

const iconic = document.getElementById('dark-iconic');
const dark_ative = document.getElementById('dark-active');
const txt_dark = document.getElementById('txt-dark');
const header = document.getElementById('header');
const section = document.getElementsByClassName('section');
const section_servicos = document.querySelectorAll('.dark')

console.log(section_servicos)

iconic.addEventListener('click',()=>{
    
    document.body.classList.toggle('darkMode')

    if(dark_ative.innerText == 'Toggle_off'){

        for (const element of section_servicos) {
            element.style.backgroundColor = 'black'
        }
       
        dark_ative.innerText = 'Toggle_on'
        txt_dark.innerText = 'Modo Light'
        header.style.color = 'black'
        
        
    }
    else{
        for (const element of section_servicos) {
             element.style.backgroundColor = ''
        }
        
        dark_ative.innerText = 'Toggle_off'
        txt_dark.innerText = 'Modo Dark'
        header.style.backgroundColor = ''
       
    }
})







const menulist = document.getElementById('menulist')

function Open() {
    menulist.classList.toggle('menu-list-abrir')
}

