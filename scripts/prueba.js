const readCostumer = document.getElementById('BtnReadCostumer')
const readArticles = document.getElementById('BtnReadArticles')

const costumerTable = document.getElementById('costumers-table')

// const mostrar = e => {
//      console.log(e.target.innerText)
//  }

//  readCostumer.addEventListener('click', e => {
//      mostrar(e)
//  })
// readArticles.addEventListener('click', e => {
//      mostrar(e)
//  })

readCostumer.addEventListener('click', evt => {
    const xhr= new XMLHttpRequest()
    var url= 'http://manchasoft.ddns.net:4325/MCS/dbGestion_dat/v1/MG_ENTIDAD?api_key=123456'
    xhr.open('GET', url, true)
    
    xhr.addEventListener('load', e => {
        var resultado = e.target.response
        var oJSON= JSON.parse(resultado)
        var totalLista = oJSON.total_count

        for ( nReg = 0; nReg < totalLista; nReg++ ) {
            var oRegistro= oJSON.mg_entidad[nReg]
            var nomCli= oRegistro.name
            
            //Añadir al HTML principal
            var cliente = document.createElement('p')
            cliente.textContent = nomCli

            costumerTable.appendChild(cliente)
        } 
    })
    xhr.send()
    
    // if ( (xhr.errorCode==0) && (xhr.status == 200) ) {
    //     var resultado= xhr.response;
    //     var oJSON= JSON.parse(resultado);
    //     var totalLista = oJSON.total_count
    
    //     for ( nReg = 0; nReg < totalLista; nReg++ ) {
    //         var oRegistro= oJSON.mg_entidad[nReg];
    //         var nomCli= oRegistro.name
    //         console.log(nomCli)
    //     }
    // }
})