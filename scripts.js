
const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0],
]

//Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento("valor").value = "";

// Obter valores do formulário
const obterValorInformado = () => obterElemento("valor");
const obterCategoriaInformada = () => obterElemento("categoria").value;

// Obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

//Atualiza valores da matriz
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInterface = () => {

    matrizGastos.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome)
        elemento.textContent = `${nome}: R ${valor}`
    })
}


//Verificação da função no console
function adicionarGasto(){
    console.log("Ok");
}

/*
1) Pegar o valor informado.
2) Pegar categoria informada.
3) Impedir números negativos.
4) Atualizar o valor de acordo com a categoria.
    4.1)Criar variáveis para controlar ou armazenar os valores de cada uma das categorias. 
5) Atualizar interface.
6) Limpar Campos
*/