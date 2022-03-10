function Converter() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);

    let valorEmReal = valorEmDolarNumerico * 5;
    let valorEmEuro = valorEmDolarNumerico * .9;
    let valorEmLibraEsterlina = valorEmDolarNumerico * 0.7;
    let valorEmEthereum = valorEmDolarNumerico * 13647.06;
    console.log(valorEmReal);

    document.querySelector("#valorConvertidoReal").textContent = `O resultado em real é R$ ${valorEmReal}`;

    document.querySelector("#valorConvertidoEuro").textContent = `O resultado em Euro é € ${valorEmEuro}`;

    document.querySelector("#valorConvertidoLibra").textContent = `O resultado em Libra Esterl. é £ ${valorEmLibraEsterlina}`;

    document.querySelector("#valorConvertidoETH").textContent = `O resultado em Ethereum é ETH ${valorEmEthereum}`;
}