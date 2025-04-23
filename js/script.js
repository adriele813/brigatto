//Armazena o botão mobile em uma variável.
var botaoMobile = document.querySelector('.menu-mobile');

//Armazena a lista não ordenada da barra de navegação em uma variável.
var paginas = document.querySelector('.paginas');

//Armazena os botõoes da barra de navegação em uma variável
const botoesnav = document.querySelectorAll('.botaonav');

//Define as ações do botão de responsividade da página.
botaoMobile.addEventListener('click', ()=>{

    //caso o menu esteja aberto, muda o icone do menu mobile e fecha o menu.
    if(paginas.classList.contains('ativo')) {
        paginas.classList.remove('ativo')
        document.querySelector('.menu-mobile img').src = "img/icons/hamburger.png"
    }
    //caso o menu esteja fechado, muda o icone do menu mobile e abre o menu.
    else{
        paginas.classList.add('ativo')
        document.querySelector('.menu-mobile img').src = "img/icons/fechar_hamburger.png"
    }

})

//Fecha o menu mobile caso algum botão da barra de navegação seja pressionado.
botoesnav.forEach(button => {
    button.addEventListener('click', function(event) {

        //Verifica se o menu mobile está aberto e caso esteja, fecha o menu. 
        if(paginas.classList.contains('ativo')) {
            paginas.classList.remove('ativo')
            document.querySelector('.menu-mobile img').src = "img/icons/hamburger.png"
        }

    });
  });


  //Inicia o Modal de Boas vindas apenas quando a página é iniciada pela primeira vez

  //Verifica se é o primeiro acesso do usuário e caso seja, exibe o modal.
  var modal = document.getElementById("modal-boas-vindas");
  var viuModal = localStorage.getItem("viuModal")

  //Caso seja o primeiro acesso, exibe.
  if(!viuModal) {

    modal.showModal();

  }

  localStorage.setItem('viuModal', 'true');

  //Fecha o modal caso o botão seja pressionado
  var botaoFecharModal = document.getElementById("botaoFecharModal")

  botaoFecharModal.addEventListener('click', ()=>{
    
    modal.close();

  });