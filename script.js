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

const linksInternos = document.querySelectorAll('a[href^="#"')
console.log(linksInternos)
linksInternos.forEach(item =>
  item.addEventListener('click', (e)=>
  {
    e.preventDefault()
    const href = e.target.getAttribute('href')
    const tagIdItem = document.querySelector(href)
    window.scrollTo({
      top: tagIdItem.offsetTop,
      behavior:"smooth"
    })
  })
  )