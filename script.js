const tabAnimais = document.querySelectorAll('.js-tab-animais li')
const tabDescricao = document.querySelectorAll('.js-tab-descricao section')
tabDescricao[0].classList.add('ativo')
function navegaçãoPorTab(){
if(tabAnimais.length && tabDescricao.length){
function navegarTab(item){
  tabDescricao.forEach(removerclass =>
    removerclass.classList.remove('ativo'))
  tabDescricao[item].classList.add('ativo')
}

tabAnimais.forEach((item,numero) =>
{
  item.addEventListener('click', ()=>
  navegarTab(numero)
  )
}
)
}
}
navegaçãoPorTab()


const faqPergunstas = document.querySelectorAll('.js-faq-lista dt')
function accordionNav(){
if(faqPergunstas.length){
faqPergunstas.forEach(item =>
  {
    item.addEventListener('click', ()=>
    {
      item.classList.toggle('ativo')
      item.nextElementSibling.classList.toggle('ativo')
    })
  })
}
}
accordionNav()

function scrollSuave (){
const linksInternos = document.querySelectorAll('a[href^="#"')
linksInternos.forEach(item =>
  item.addEventListener('click', (e)=>
  {
    e.preventDefault()
    const href = e.target.getAttribute('href')
    const tagIditem = document.querySelector(href)
    window.scrollTo({
      top: tagIditem.offsetTop,
      behavior:"smooth"
    })
  })
  )
}  
scrollSuave()

const sections = document.querySelectorAll('.js-scroll')
function animarScroll(){
if(sections.length){
function scrollAnimado (){
  sections.forEach((section) =>
  {
    const ajusteTela = window.innerHeight * 0.6;
    const distanciaTopo = section.getBoundingClientRect().top -ajusteTela ;
    if(distanciaTopo < 0){
      section.classList.add('ativo')
    }
  }
  )
}
}
window.addEventListener('scroll',scrollAnimado)
}
animarScroll()