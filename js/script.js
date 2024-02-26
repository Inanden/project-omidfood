


//TODO: JASCRIPT MOBILE WORK ============ FIXME:


const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function (){
  headerEl.classList.toggle("nav-open");

 
})

// TODO: SMOOTH SCROLLING ANIMATION =====================

const allLinks = document.querySelectorAll("a:link")



allLinks.forEach( function(link){
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");



    // TODO: SCROLL PARA VOLTAR PRA CIMA =====================
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } // fim da primeira Condição if  SCROLL

    // TODO: SCROLL PARA PARA OUTRAS SECTION DA PAGINA =====================
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
   
    } // fim da Segunta Condição if SCROLL
  });
  if(link.classList.contains("main-nav-link")){
    headerEl.classList.toggle("nav-open");
  }
})


/***************************/
/* TODO: STICKY POSSITION */
/***************************/
const sectionHeroEl = document.querySelector(".section-hero");
const observacao = new IntersectionObserver(function (entries){
      const ent = entries[0];
      if(ent.isIntersecting === false){
        document.body.classList.add("sticky");
    
      } 



      if(ent.isIntersecting === true){
        document.body.classList.remove("sticky");
   
      } 

      
}, {

  // Dentro de Toda a janela de navegação
  root: null,
  threshold: 0,
  rootMargin: '-80px',  // Aqui quando chegar na altura certa que queremos
})

observacao.observe(sectionHeroEl);



function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js


