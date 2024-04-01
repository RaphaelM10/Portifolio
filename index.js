const sec= document.getElementById('sgbd');
const sec1= document.getElementById('sgbd-img');
const el= document.getElementById('el');

const mysql= document.getElementById('mysql-div');
const mysqlimg= document.getElementById('mysql-img');
const mysqltxt= document.getElementById('mysql');

const port= document.getElementById('port');
const iconic= document.getElementById('iconic');
const ativar= document.getElementById('ativar');

const div_py = document.getElementById('div-py');
const logo_py = document.getElementById('logo-py');
const txt_py = document.getElementById('txt-py')

const div_bi = document.getElementById('div-bi');
const logo_bi = document.getElementById('logo-bi');
const txt_bi = document.getElementById('txt-bi')


iconic.addEventListener('click',()=>{

  
  if(iconic.innerHTML == 'expand_more'){
    ativar.classList.toggle('section-mobile-active');
    iconic = document.getElementById('iconic').innerHTML = 'Close'
    
}else if(iconic.innerHTML == 'Close'){
    ativar.classList.toggle('section-mobile-active')
    iconic = document.getElementById('iconic').innerHTML = 'expand_more'
    
} 
}
)

/* função clique */
function Click(){
    sec.addEventListener('click',()=>{
        if(el.innerHTML == 'Excel'){ 
              el.innerHTML = `<p> O excel permite a criação e 
              organização de dados a partir da criação e edição de planilhas onde os dados principais a serem trabalhados são números.</p>`
              
              el.style.backgroundColor = '#601fb6'
              el.style.padding = '10px'
              el.style.fontFamily = 'Kanit'
              el.style.borderRadius = '10px'
              el.style.transition = '1.5s'
              sec1.style.display = 'none'
              mysql.style.display = 'none'
      }else{
          el.innerHTML = 'Excel'
          el.style.fontSize = ''
          el.style.backgroundColor = ''
          mysql.style.display = ''
          sec1.style.display = ''
          el.style.transition = ''
         }
      })
  
   mysql.addEventListener('click',()=>{
      if(mysqltxt.innerHTML == 'MySQL'){ 
            mysqltxt.innerHTML = `<p> MySQL é um banco de dados, e este banco de dados é conhecido 
            por sua facilidade de uso, sendo ele usado pela  NASA, HP, Bradesco, Sony e muitas outras empresas.</p>`
            
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
        mysqltxt.style.transition = ''
       
       }
    })



    


    div_py.addEventListener('click',()=>{
        if(txt_py.innerHTML == 'Python'){
            txt_py.innerHTML = `<p>O Python é uma linguagem de programação amplamente usada em aplicações da Web, 
            desenvolvimento de software, ciência de dados e machine learning (ML)</p>`
            logo_py.style.display = 'none'
            logo_bi.style.display = 'none'
            txt_py.style.backgroundColor = '#601fb6'
            txt_py.style.padding = '10px'
            txt_py.style.fontFamily = 'Kanit'
            txt_py.style.borderRadius = '10px'
            txt_py.style.transition = '1.5s'
            txt_bi.style.display = 'none'
           
        }
        else{
           
            txt_py.innerHTML = 'Python'
            logo_py.style.display = ''
            logo_bi.style.display = ''
            txt_py.style.backgroundColor = ''
            txt_py.style.padding = ''
            txt_py.style.fontFamily = ''
            txt_py.style.borderRadius = ''
            txt_bi.style.display = ''
            txt_py.style.transition = ''
           
        

            
        }
    })

    div_bi.addEventListener('click',()=>{
        if(txt_bi.innerHTML == 'PowerBI'){
            txt_bi.innerHTML = `<p>Projetos PowerBI: </p>`
            var x = document.createElement("IMG");
            logo_bi.style.display = 'none'
            logo_py.style.display = 'none'
            txt_bi.style.backgroundColor = '#601fb6'
            txt_bi.style.padding = '10px'
            txt_bi.style.fontFamily = 'Kanit'
            txt_bi.style.borderRadius = '10px'
            txt_bi.style.transition = '1.5s'
            txt_py.style.display = 'none'
           
        }
        else{
           
            txt_bi.innerHTML = 'PowerBI'
            logo_py.style.display = ''
            logo_bi.style.display = ''
            txt_bi.style.backgroundColor = ''
            txt_bi.style.padding = ''
            txt_bi.style.fontFamily = ''
            txt_bi.style.borderRadius = ''
            txt_py.style.display = ''
            txt_bi.style.transition = ''
           
        

            
        }
    })


}
Click()

const portf = document.getElementById('opc-mobile1');

portf.addEventListener('click',()=>{
    alert('Em Construção...')
    
})



const dark = document.getElementById('modo-dark');
const darkiconic = document.getElementById('dark-iconic');
const txticonic = document.getElementById('txt-dark');
const main = document.getElementById('section');





function Noturno(){

    if(txticonic.innerHTML == 'Modo Dark'){
        txticonic.innerHTML = 'Modo Light'
        darkiconic.innerHTML = '<span id="iconic-opc" id="iconic-dark" class="material-symbols-outlined">toggle_on</span>'
        document.getElementById('topo').style.backgroundColor = 'black'
        document.getElementById('section-2-p').style.backgroundColor= 'black'
        main.style.backgroundImage = 'linear-gradient(#09080a,#291335)'
        document.getElementById('sobres').style.backgroundImage = 'linear-gradient(#09080a,#291335)'
        document.getElementById('footer').style.backgroundImage = 'linear-gradient(#09080a,#291335)'
        document.getElementById('sec-3').style.backgroundImage= 'linear-gradient(#09080a,#291335)'
        document.getElementById('sec-4').style.backgroundColor = 'Black'
        document.getElementById('sec-5').style.backgroundImage = 'linear-gradient(#09080a,#291335)'
        document.getElementById('sec-6').style.backgroundImage = 'linear-gradient(#09080a,#291335)'
        document.getElementById('outros-conteudo').style.backgroundColor = 'Black'
        document.getElementById('outros').style.backgroundColor = 'black'
        document.getElementById('outros2').style.backgroundColor = 'black'
        document.getElementById('sec-links').style.backgroundColor = 'black'
        document.getElementById('contatos').style.backgroundImage = 'linear-gradient(#09080a,#291335)'
        document.getElementById('Dark-mobile').innerHTML = 'Modo Light'
        

      
        
        
    }else{
        txticonic.innerHTML = 'Modo Dark'
        darkiconic.innerHTML = '<span id="iconic-opc" id="iconic-dark" class="material-symbols-outlined">Toggle_off</span>'
        document.getElementById('outros-conteudo').style.backgroundColor = ''
        document.getElementById('outros').style.backgroundColor = ''
        document.getElementById('outros2').style.backgroundColor = ''
        document.getElementById('sec-links').style.backgroundColor = ''
        document.getElementById('contatos').style.backgroundImage = ''
        document.getElementById('section-2-p').style.backgroundColor= ''
        document.getElementById('topo').style.backgroundColor = ''
        main.style.backgroundImage = ''
        document.getElementById('sobres').style.backgroundImage = ''
        document.getElementById('footer').style.backgroundImage =''
        document.getElementById('sec-3').style.backgroundImage = ''
        document.getElementById('sec-4').style.backgroundColor = ''
        document.getElementById('sec-5').style.backgroundImage = ''
        document.getElementById('sec-6').style.backgroundImage = ''
        document.getElementById('sec-6-txt').style.backgroundColor = ''
        document.getElementById('Dark-mobile').innerHTML = 'Modo Dark'

        
    }

}
   
/*const sec5 = [...document.querySelectorAll('#sec-6-txt')]
sec5.map((el)=>{
  el.addEventListener('click',()=>{
    el.style.backgroundColor = 'blue'
  })
})*/



