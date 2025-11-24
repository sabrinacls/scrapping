//
const ESTADO_SP = 'SP'; 

function exibirMunicipios(municipios) {
    let ol = document.createElement("ol");

       
        document.body.appendChild(document.createElement("h2")).textContent = "Municípios de " + ESTADO_SP;
        municipios.forEach(municipio => {
            let li = document.createElement("li");
           
            li.innerHTML = municipio.nome + " (ID: " + municipio.id + ")"; 
            ol.appendChild(li);
        });

    document.body.appendChild(ol);
}


function buscarMunicipiosSP() {

    const urlIBGE = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + ESTADO_SP + "/municipios";

    fetch(urlIBGE) 
        .then(response => {
            if (!response.ok) {
                throw new Error("Chamada HTTP Falhou. Status: " + response.status + "."); 
            }
            return response.json(); 
        })
        .then(dadosJSON => {
            exibirMunicipios(dadosJSON);
        })
        .catch(erro => {
            console.error(erro);
            alert("Ocorreu um erro: " + erro.message);
        });
}



