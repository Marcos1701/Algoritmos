import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const num_elementos = Number(input('Digite o num de elementos da sequencia q deseja: '))

    pegar_elementos_sequencia(num_elementos)

}


function pegar_elementos_sequencia(num_elementos){

    let num_A = 0
    let num_B = 1
    let elemento_sequencia = num_A
    for(let i = 0; i <= num_elementos; i++){

        console.log(elemento_sequencia)
        num_A = num_B
        num_B = elemento_sequencia
        elemento_sequencia = num_A + num_B
    }
}

main()