import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const quadrado = Number(input('Digite um valor: '))

    pegar_quadrado_mais_prox(quadrado)

}

function pegar_quadrado_mais_prox(quadrado){

    let quadrado_mais_prox = 0
    let i = 0
    for(; (i**2) <= quadrado;i++){
        quadrado_mais_prox = i**2
    }
    console.log(`o quadrado mais proximo é ${quadrado_mais_prox} (quadrado de ${i - 1})`)
}


main()