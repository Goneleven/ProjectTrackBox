

//esses lets foram criados para seem usados dentro e fora dos fetchs
let dolarr;
let h3Element
let valorDoProduto

//API dolar 
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(response => {
    return response.json()
}).then(economia => {
    
  //pegando o valor do dolar
  dolarr = economia.USDBRL.bid;


//Transformar em int o valor do produto que esta no h3 
//imprimindo o valor do produto em real, que esta sendo multiplicado com a api

h3Element = document.getElementById("valorDoProduto");
valorDoProduto = parseInt(h3Element.textContent)

document.getElementById("valorDoProduto2").innerHTML = "R$ " +(valorDoProduto * dolarr).toFixed(2)

//------------------------------------------------------------------------------------------------------

const h3Element3 = document.getElementById("valorDoProduto3");
const valorDoProduto3 = parseInt(h3Element3.textContent)
document.getElementById("valorDoProduto4").innerHTML = "R$ " + (valorDoProduto3 *dolarr).toFixed(2)



const h3Element5 = document.getElementById("valorDoProduto5");
const valorDoProduto5 = parseInt(h3Element5.textContent)

document.getElementById("valorDoProduto6").innerHTML = "R$ " + (valorDoProduto5 * dolarr).toFixed(2)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const h3Element7 = document.getElementById("valorDoProduto7");
const valorDoProduto7 = parseInt(h3Element7.textContent)

document.getElementById("valorDoProduto8").innerHTML = "R$ " + (valorDoProduto7 * dolarr).toFixed(2)
////////////////////////////////////////////////////////////////////////////////////////////////////////

const h3Element9 = document.getElementById("valorDoProduto9");
const valorDoProduto9 = parseInt(h3Element9.textContent)

document.getElementById("valorDoProduto10").innerHTML = "R$ " + (valorDoProduto9 * dolarr).toFixed(2)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const h3Element11 = document.getElementById("valorDoProduto11");
const valorDoProduto11 = parseInt(h3Element11.textContent)

document.getElementById("valorDoProduto12").innerHTML = "R$ " + (valorDoProduto11 * dolarr).toFixed(2)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const h3Element13 = document.getElementById("valorDoProduto13");
const valorDoProduto13 = parseInt(h3Element13.textContent)

document.getElementById("valorDoProduto14").innerHTML = "R$ " + (valorDoProduto13 * dolarr).toFixed(2)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const h3Element15 = document.getElementById("valorDoProduto15");
const valorDoProduto15 = parseInt(h3Element15.textContent)

document.getElementById("valorDoProduto16").innerHTML = "R$ " + (valorDoProduto15 * dolarr).toFixed(2)
////////////////////////////////////////////////////////////////////////////////////////////////////////

const h3Element17 = document.getElementById("valorDoProduto17");
const valorDoProduto17 = parseInt(h3Element17.textContent)

document.getElementById("valorDoProduto18").innerHTML = "R$ " + (valorDoProduto17 * dolarr).toFixed(2)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const h3Element19 = document.getElementById("valorDoProduto19");
const valorDoProduto19 = parseInt(h3Element19.textContent)

document.getElementById("valorDoProduto20").innerHTML = "R$ " + (valorDoProduto19 * dolarr).toFixed(2)

})





//preencher os inputs com arrow functions
const preencherFormulario = (endereco) => {
  document.getElementById("rua").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
}
//autopreenchimento
const cepValido = (cep) => {
  if (cep.length == 8) {
    return true;
  } else {
    return false; 
  }
}
//buscar API
//Com async e await podemos trabalhar com código assíncrono em um estilo mais parecido com o bom e velho código síncrono.
const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);

    //imprimir as informações do cep
    document.getElementById("ruad").innerHTML = endereco.logradouro;
    document.getElementById("bairrod").innerHTML = endereco.bairro;
    document.getElementById("cidaded").innerHTML = endereco.localidade;
    document.getElementById("estadod").innerHTML = endereco.uf;
    document.getElementById("valorDoProduto").innerText
    const precoElement = document.getElementById("preco");
    precoElement.textContent = "R$ " + (valorDoProduto * dolarr).toFixed(2);

  }
  
}
document.getElementById("cep").addEventListener("focusout", pesquisarCep);




function calcularValores() {
  const cep = document.getElementById("cep").value;

  // Faz uma requisição GET à API do ViaCEP para obter os dados do CEP
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      let valorFrete = 0;

      // Verifica se o CEP é válido
      if (data.erro) {
        document.getElementById("valor-frete").innerHTML = "CEP inválido.";
        return;
      }

      // Calcula o valor de frete de acordo com o estado do CEP
      switch (data.uf) {
        case "SP":
          valorFrete = 5;
          break;
        case "RJ":
          valorFrete = 30;
          break;
        case "MG":
          valorFrete = 40;
          break;
        case " MA":
          valorFrete = 70;
          break;
        default:
          valorFrete = 50;
          break;
      }

    

      document.getElementById("valor-frete").innerHTML = `R$${valorFrete.toFixed(2)}.`;
      document.getElementById("valorTotal").innerHTML = "R$ " +(valorDoProduto * dolarr + valorFrete).toFixed(2);
      
    })
    .catch(error => {
      document.getElementById("valor-frete").innerHTML = "CEP não encontrado.";
      console.log(error);

    });
}


//Imprimir que a compra foi confirmada
const conf = document.getElementById('confirmar')
conf.addEventListener('click', function(){
  resultado.textContent = `Sua compra foi confirmada`
})



