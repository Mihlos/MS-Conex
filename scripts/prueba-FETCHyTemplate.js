const STATUS_OK = 200

const readCustomer = document.getElementById('BtnReadCustomer')
const customerTable = document.getElementById('customers-table')

readCustomer.addEventListener('click', async () => {
    const url= 'http://manchasoft.ddns.net:4325/MCS/dbGestion_dat/v1/MG_ENTIDAD?api_key=123456'
    const response = await fetch(url)
    switch (response.status){
        case STATUS_OK:
            data = await response.json()
            drawTempString(data.mg_entidad)
        break
        default:
            console.log("Error al obtener datos")
        break
     }
    })

const drawTempString = customers => {
    customerTable.innerHTML= ''
    const container = document.createElement('div')

    customers.forEach(customer => {
        const customersHTML = `
        <p>ID: ${customer.id} - Nombre: ${customer.name}</p>`
        container.insertAdjacentHTML('beforeend', customersHTML)
    })

    customerTable.appendChild(container)
}