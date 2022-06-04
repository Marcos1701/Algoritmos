import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const num_elementos = Number(input('Digite o num de elementos da sequencia q deseja: '))

    pegar_elementos_sequencia(num_elementos)

}


function pegar_elementos_sequencia(num_elementos){

    let num_referencia = 0
    for(let i = 1; i <= num_elementos; i++){
        num_referencia += i
        console.log(num_referencia)
    }
}

main()