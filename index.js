const sec= document.getElementById('sgbd');
const sec1= document.getElementById('sgbd-img');
const el= document.getElementById('el');
const mysql= document.getElementById('mysql-div');
const mysqlimg= document.getElementById('mysql-img');
const mysqltxt= document.getElementById('mysql');

const port= document.getElementById('port');
const iconic= document.getElementById('iconic');
const ativar= document.getElementById('ativar');

iconic.addEventListener('click',()=>{
    ativar.classList.toggle('section-mobile-active');
   
}
)



function Port(){
    setInterval(() => {
        port.innerHTML = 'My Portfolio'
    }, 5000);
    port.innerHTML ='Portfolio'
}
Port()
    




function Click(){
    sec.addEventListener('click',()=>{
        if(el.innerHTML == 'Banco de Dados'){ 
              el.innerHTML = `<p> Um banco de dados
              é uma coleção organizada de informações ou dados </br>
              estruturadas, normalmente armazenadas eletronicamente em  </br>um sistema de computador.</p>`
              
              el.style.backgroundColor = '#601fb6'
              el.style.padding = '10px'
              el.style.fontFamily = 'Kanit'
              el.style.borderRadius = '10px'
              el.style.transition = '1.5s'
              sec1.style.display = 'none'
              mysql.style.display = 'none'
      }else{
          el.innerHTML = 'Banco de Dados'
          el.style.fontSize = ''
          el.style.backgroundColor = ''
          mysql.style.display = ''
          sec1.style.display = ''
         }
      })
  
   mysql.addEventListener('click',()=>{
      if(mysqltxt.innerHTML == 'MySQL'){ 
            mysqltxt.innerHTML = `<p> MySQL é um banco de dados, e este banco de dados é conhecido </br>
            por sua facilidade de uso, sendo ele usado pela </br> NASA, HP, Bradesco, Sony e muitas outras empresas.</p>`
            
            mysqltxt.style.backgroundColor = '#601fb6'
            mysqltxt.style.padding = '10px'
            mysqltxt.style.fontFamily = 'Kanit'
            mysqltxt.style.borderRadius = '10px'
            mysqltxt.style.transition = '1.5s'
            sec.style.display = 'none'
            mysqlimg.style.display = 'none'
          
            
    }else{
        mysqltxt.innerHTML = 'MySQL'
        mysqltxt.style.fontSize = ''
        mysqltxt.style.backgroundColor = ''
        sec.style.display = ''
        mysqlimg.style.display = ''
       
       }
    })
  
}
Click()





const portf = document.getElementById('opc-mobile1');

portf.addEventListener('click',()=>{
    alert('Em Construção...')
    
})