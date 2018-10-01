const readCostumer = document.getElementById('BtnReadCostumer')
const readArticles = document.getElementById('BtnReadArticles')

// const mostrar = e => {
//      console.log(e.target.innerText)
//  }

//  readCostumer.addEventListener('click', e => {
//      mostrar(e)
//  })
// readArticles.addEventListener('click', e => {
//      mostrar(e)
//  })

readCostumer.addEventListener('click', () => {
    var xhr= new XMLHttpRequest();
    var url= 'http://manchasoft.ddns.net:4325/MCS/dbGestion_dat/v1/MG_ENTIDAD?api_key=123456';
    
    xhr= new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    
    if ( (xhr.errorCode==0) && (xhr.status == 200) ) {
        var resultado= xhr.response;
        var oJSON= JSON.parse(resultado);
        var totalLista = oJSON.total_count
    
        for ( nReg = 0; nReg < totalLista; nReg++ ) {
            var oRegistro= oJSON.mg_entidad[nReg];
            var nomCli= oRegistro.name
            console.log(nomCli)
        }
    }
})