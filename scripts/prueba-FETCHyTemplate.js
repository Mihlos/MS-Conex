const STATUS_OK = 200

const readCustomer = document.getElementById('BtnReadCustomer')
const readProvider = document.getElementById('BtnReadProvider')
const readFarmer = document.getElementById('BtnReadFarmer')
const readArticle = document.getElementById('BtnReadArticle')
const DataTable = document.getElementById('customers-table')

//OBTENER DATOS
const getData = async (url,type, text) => {
    const response = await fetch(url)
    //console.log(response.status)
    switch (response.status){
        case STATUS_OK:
            data = await response.json()
            //console.log(type)
            if (type == "people") drawCustomers(data, text)
            if (type == "articles") drawArticles(data)
        break
        default:
            console.log("Error al obtener datos: "+ response.status)
    }
}

//PINTAR PERSONAS
const drawCustomers = (customers, text) => {
    DataTable.innerHTML= ''
    const container = document.createElement('div')
    container.insertAdjacentHTML("beforeend", `<h2>Personas: ${text}</h2>`)
    customers.mg_entidad.forEach(customer => {
        const customersHTML = `
        <p>ID: ${customer.id} - Nombre: ${customer.name}</p>`
        container.insertAdjacentHTML('beforeend', customersHTML)
    })
    DataTable.appendChild(container)
}

//PINTAR ARTICULOS
const drawArticles = articles => {
    DataTable.innerHTML= ''
    const container = document.createElement('div')
    container.insertAdjacentHTML("beforeend", `<h2>Artículos</h2>`)
    articles.mg_articulo.forEach(article => {
        const customersHTML = `
        <p>Ref: ${article.ref} - Nombre: ${article.name}</p>`
        container.insertAdjacentHTML('beforeend', customersHTML)
    })
    DataTable.appendChild(container)
}

//BOTÓN PULSADO
readCustomer.addEventListener('click', () => {
    const url= 'http://manchasoft.ddns.net:4325/MCS/dbGestion_dat/v1/mg_entidad?api_key=123456&filter[id_clien]'
    let type = "people"
    let text = readCustomer.textContent
    getData(url, type, text)
})
readProvider.addEventListener('click', () => {
    const url= 'http://manchasoft.ddns.net:4325/MCS/dbGestion_dat/v1/mg_entidad?api_key=123456&filter[id_prov]'
    let type = "people"
    let text = readProvider.textContent
    getData(url, type, text)
})
readFarmer.addEventListener('click', () => {
    const url= 'http://manchasoft.ddns.net:4325/MCS/dbGestion_dat/v1/mg_entidad?api_key=123456&filter[id_agric]'
    let type = "people"
    let text = readFarmer.textContent
    getData(url, type, text)
})
readArticle.addEventListener('click', () => {
    const url= 'http://manchasoft.ddns.net:4325/MCS/dbGestion_dat/v1/MG_ARTICULO?api_key=123456'
    let type = "articles"
    getData(url, type)
})

