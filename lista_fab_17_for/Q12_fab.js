import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const [qtd_n,soma] = pegar_valores_de_n()

    console.log(`foram inseridos ${qtd_n} numeros`)
    console.log(`a média resultante é ${(soma / qtd_n).toFixed(2)}`)

}

function pegar_valores_de_n(){
    console.log('Valor parada = FIM')
    let N = input('N: ')
    let soma = Number(N)
    let qtd = 0
    
    for(;N != 'FIM';qtd++){
        soma += Number(N)
        N = input('N: ')
    }
    return [qtd,soma]
}

main()