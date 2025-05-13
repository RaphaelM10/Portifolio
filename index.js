const restart = document.getElementById('restart');

restart.addEventListener('click',()=>{
    location.reload()
})


///Menu Bar
const menubar = document.getElementById('menubar');
const header_event = document.querySelector('.menu-event')


menubar.addEventListener('click',()=>{
  let abrir = document.getElementById('abrir');
  
  if (!abrir) {
    
    const novoMenu = document.createElement('div');
    novoMenu.className = 'menubar-list abrir'; // já com a classe
    novoMenu.id = 'abrir';
    novoMenu.innerHTML = `
      <a href="#"><span class="menu-txt">Inicio</span></a>
      <a href="#rota-service"><span class="menu-txt">Serviços</span></a>
      <a href="#rota-forms"><span class="menu-txt">Contatos</span></a>
      <span onclick="alternarModo()" class="material-symbols-outlined iconic-dark troca-iconic" id="dark-iconic">dark_mode</span>
    `;
    header_event.appendChild(novoMenu);
    menubar.textContent = 'Close'; // muda nome do botão
    const links = novoMenu.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    novoMenu.classList.remove('abrir');
    menubar.textContent = 'Menu';
  });
});
  } else {
    
    abrir.classList.toggle('abrir');
    if (abrir.classList.contains('abrir')) {
      menubar.textContent = 'Close';
    } else {
      menubar.textContent = 'Menu';
    }
  }
 
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



/// enviar e-mail:

(function() {
  emailjs.init("bLDw9DNA3RrfYv8cA"); // substitua aqui
})();

// Evento de envio do formulário

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio tradicional do form

    emailjs.sendForm("service_xv6laam", "template_f3y8jqq", this)
        .then(function () {
            form.reset();
            mostrarAlerta("E-mail enviado com sucesso!", true);
        }, function (error) {
            console.error("Erro ao enviar:", error);
            mostrarAlerta("Erro ao enviar. Tente novamente.", false);
        });
});

function mostrarAlerta(mensagem, sucesso) {
    const alerta = document.getElementById("meuAlerta");
    const alertaConteudo = alerta.querySelector(".alerta-conteudo p");

    alertaConteudo.textContent = mensagem;

    if (sucesso) {
        alerta.classList.remove("erro");
        alerta.classList.add("sucesso");
    } else {
        alerta.classList.remove("sucesso");
        alerta.classList.add("erro");
    }

    alerta.classList.add("mostrar");
}

function fecharAlerta() {
    const alerta = document.getElementById("meuAlerta");
    alerta.classList.remove("mostrar");
}


/// Ano Atual




function year(){
    const ano_atual = new Date().getFullYear();
    const txt_copy = document.getElementById('txt-copy');

    txt_copy.innerHTML = `<p>&copy; ${ano_atual} R-DATA. Todos os direitos reservados.</p>`
}
year()









/// Modo Dark - Ativar e Desativar



function alternarModo() {

const iconic = document.querySelectorAll('.troca-iconic');
const body = document.getElementsByTagName('body')[0];

  body.classList.toggle('alternar');

  for (const item of iconic) {
    if (item.innerText.trim() === 'dark_mode') {
      item.innerText = 'light_mode';
    } else {
      item.innerText = 'dark_mode';
    }
  }
  
}

