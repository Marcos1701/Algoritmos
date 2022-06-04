import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const valor = Number(input('Digite um valor: '))

    pegar_o_quadrado_menor_ou_igual_a_N(valor)

}


function pegar_o_quadrado_menor_ou_igual_a_N(valor){
    let valor_comparacao = 0
    let quadrado_mais_prox = valor_comparacao * valor_comparacao
    while(eh_menor_ou_igual(valor,quadrado_mais_prox)){
        valor_comparacao++
        quadrado_mais_prox = valor_comparacao * valor_comparacao
    }

    console.log(`o quadrado mais proximo é ${quadrado_mais_prox} (quadrado de ${valor_comparacao})`)
}

function eh_menor_ou_igual(valor, quadrado){
    return valor >= quadrado
}

main()