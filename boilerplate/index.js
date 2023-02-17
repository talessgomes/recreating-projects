let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()
console.log(arrDespesas)

// PRIMEIRO
function imprimirDespesas(despesas){
    despesas.sort((a,b) => a - b);
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    despesas.forEach((despesa) => {
        divDespesas.innerHTML += `<p>Valor: R$${despesa.valor} | Tipo: ${despesa.tipo} | Descricao: ${despesa.descricao} </p>`
    })
    // AQUI VEM A IMPLEMENTAÇÃO
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


  //  AQUI VEM A IMPLEMENTAÇÃO

     arrDespesas.forEach((gasto) => {
        switch (gasto.tipo) {
            case "alimentação":
            gastoAlimentacao += gasto.valor
            gastoTotal += gasto.valor
            break;
            case "utilidades":
                gastoUtilidades += gasto.valor
                gastoTotal += gasto.valor
            break;
            case "viagem":
                gastoViagem += gasto.valor
                gastoTotal += gasto.valor
        }
    })
    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("Faltou algum valor ou algum valor é um número negativo")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    if (valorMin > valorMax) {
        window.alert("O valor mínimo deve ser menor do que o valor máximo")
        return false;
    } 

    if (valorMin > 0 && valorMax > 0) {
        return true
    } else {
        window.alert("O valor dos campos não pode ser menor do que 0")
    }
    
    if (valorMin !== "" && valorMax !== "") {
        return true
    } else {
        window.alert("Os campos não podem ficar vazios")
    }


    let despesasFiltradas = arrDespesas.filter((despesas) => {
        if (tipoFiltro === "todos") {
            return true;
        } else if (tipoFiltro === despesas.tipo){
            return true
        }
            return false;
    }) // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO

    despesasFiltradas = despesasFiltradas.filter((despesas) => {
        if (valorMin <= despesas.valor && valorMax >= despesas.valor) {
            return true;
        }
            return false
    })

    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}