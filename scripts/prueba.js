const readCostumer = document.getElementById('BtnReadCostumer')
const readArticles = document.getElementById('BtnReadArticles')

const mostrar = e => {
    console.log(e.target.innerText)
}

readCostumer.addEventListener('click', e => {
    mostrar(e)
})
readArticles.addEventListener('click', e => {
    mostrar(e)
})