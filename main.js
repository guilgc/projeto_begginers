const nome = document.getElementById('nome')
const nomeseta = document.getElementById('nomeseta')
const tipo = document.getElementById('tipo')
const estado = document.getElementById('estado')
const numero = document.getElementById('numero')
const caracteristicas = document.getElementById('caracteristica')

const dados = JSON.parse(localStorage.getItem('dados')) || []

function addDados() {
    const nomedado = nome.value
    const tipodado = tipo.value
    const estadodado = estado.value
    const numerodado = numero.value
    const caracteristicasdado = caracteristicas.value

    const roupa = {
      nome_produto: nomedado,
      tipo_do_produto: tipodado, 
      estado_do_produto: estadodado, 
      numero_de_serie: numerodado, 
      caracteristicas: caracteristicasdado
    }

    dados.push(roupa)
    
    localStorage.setItem('dados', JSON.stringify(dados))
}

function ponto(){
  let num = document.getElementById ('numero')
  if (numero.value.length == 3){
    numero.value += "."
  }
}

