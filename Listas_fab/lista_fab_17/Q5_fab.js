import prompt from 'prompt-sync';
const input = prompt()

function main(){

    const valor = Number(input('Digite o valor: '))

    calcular_fatorial(valor)

}

function calcular_fatorial(valor){
    let fatorial = valor
    let multiplicador = valor - 1

    while(multiplicador > 0){

        fatorial *= multiplicador
        multiplicador--
    }
    console.log(`fatorial: ${fatorial}`)
}

main()