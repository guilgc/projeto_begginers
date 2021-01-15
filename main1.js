const dados = JSON.parse(localStorage.getItem('dados'))
let corpoTabela = document.querySelector('tbody')


function montarTabela() {
    for(let i = 0; i < dados.length; i++){
    var produtos = dados[i]

    let linha = document.createElement('tr')
    let tdNome = document.createElement('td')
    let tdTipo = document.createElement('td')
    let tdEstado = document.createElement('td')
    let tdNumSerie = document.createElement('td')
    let tdCaracs = document.createElement('td')

    let nome = produtos.nome_produto
    tdNome.textContent = nome

    let tipo = produtos.tipo_do_produto
    tdTipo.textContent = tipo

    let estado = produtos.estado_do_produto
    tdEstado.textContent = estado

    let num_serie = produtos.numero_de_serie
    tdNumSerie.textContent = num_serie

    let caracs = produtos.caracteristicas
    tdCaracs.textContent = caracs

    linha.appendChild(tdNome)
    linha.appendChild(tdTipo)
    linha.appendChild(tdEstado)
    linha.appendChild(tdNumSerie)
    linha.appendChild(tdCaracs)

    corpoTabela.appendChild(linha)
    }
    
}
montarTabela()