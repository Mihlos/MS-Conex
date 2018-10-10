const readCustomer = document.getElementById('BtnReadCustomer')
const readArticles = document.getElementById('BtnReadArticles')

const customerTable = document.getElementById('customers-table')

readCustomer.addEventListener('click', () => {
    const xhr= new XMLHttpRequest()
    var url= 'http://manchasoft.ddns.net:4325/MCS/dbGestion_dat/v1/MG_ENTIDAD?api_key=123456'
    xhr.open('GET', url, true)
    
    // Que hacer con la info.
    xhr.addEventListener('load', e => {
        const result = JSON.parse(e.target.responseText)
        //console.log(result.mg_entidad)
        drawInfo(result.mg_entidad)
    })
    xhr.send()
    // COMO SE HACE EN VELNEO
    // if ( (xhr.errorCode==0) && (xhr.status == 200) ) {
    //     var resultado= xhr.response;
    //     var oJSON= JSON.parse(resultado);
    //     var totalLista = oJSON.total_count
    
    //     for ( nReg = 0; nReg < totalLista; nReg++ ) {
    //         var oRegistro= oJSON.mg_entidad[nReg];
    //         var nomCli= oRegistro.name
    //     }
    // }
})

const drawInfo = customers => {
    customerTable.innerHTML= ''
    const fragment= document.createDocumentFragment()
    customers.forEach(customer => {
        //Añadir al HTML principal
        let clientName = document.createElement('p')
        clientName.textContent = customer.name
        fragment.appendChild(clientName)
    });
    customerTable.appendChild(fragment)
}