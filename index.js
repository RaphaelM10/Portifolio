
/// Modo Dark - Ativar e Desativar

const iconic = document.getElementById('dark-iconic');
const dark_ative = document.getElementById('dark-active');
const txt_dark = document.getElementById('txt-dark');
const header = document.getElementById('header');
const section = document.getElementsByClassName('section');
const section_servicos = document.querySelectorAll('.dark')



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









/// abrir a lista do menu de contatos

const menulist = document.getElementById('menulist')

function Open() {
   
    menulist.classList.toggle('menu-list-abrir')


}



// Restart


const restart = document.getElementById('restart');

restart.addEventListener('click',()=>{
    location.reload()
})





/// Para min, até destino

document.getElementById("partida").addEventListener("click", function() {
    let destino = document.getElementById("destino");
    let headerHeight = document.querySelector("header").offsetHeight; // Pega a altura do cabeçalho

    // Usar scrollIntoView com comportamento suave e ajuste do bloqueio para não ultrapassar
    let destinoPos = destino.getBoundingClientRect().top + window.scrollY; // Posição real do destino
    let offsetPos = destinoPos - headerHeight; // Ajusta para compensar o cabeçalho fixo

    // Rola suavemente até o destino ajustado
    window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
    });
});


/// Ano Atual


function year(){
    const ano_atual = new Date().getFullYear();
    const txt_copy = document.getElementById('txt-copy');

    txt_copy.innerHTML = `<p>&copy; ${ano_atual} Raphael Mendes. Todos os direitos reservados.</p>`
}
year()