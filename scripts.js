
const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0],
]

//Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor <= 0; //Bloqueia valores vazios, zeros e negativos
const somaValor = (total, valor) => total + valor;

//Limpar os campos de entrada
const limparCampos = () => {
    obterElemento("valor").value = "";
    obterElemento("categoria").selectedIndex = 0; // Reseta o select para a primeira opção
}

// Obter valores do formulário
const obterValorInformado = () => parseFloat(obterElemento("valor").value);
const obterCategoriaInformada = () => obterElemento("categoria").value;

// Obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

//Atualiza valores da matriz
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

//Atualiza interface com a formatação correta
const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome);
        if(elemento) {
            //Formata o valor para a moeda local (Real)
            const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            elemento.textContent = `${nome}: ${valorFormatado}`
        } 
    });
};

//Função principal
function adicionarGasto(){
    //Verificação da função no console
    console.log("Ok");

    const valorInformado = obterValorInformado();
    const categoriaInformada = obterCategoriaInformada();

    //Validação aprimorada
    if(valorNegativo(valorInformado)) {
        alert("Valor inválido! Por favor, informe um valor válido e maior que zero.");
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, "Total");

    //Verifica se a categoria foi encontrada na matriz antes de atualizar
    if (!categoria) {
        alert("Categoaria não encontrada.");
        return;
    }

    // Artualiza e limpa os campos
    atualizaValorCategoria(categoria, valorInformado);
    atualizaValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();
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