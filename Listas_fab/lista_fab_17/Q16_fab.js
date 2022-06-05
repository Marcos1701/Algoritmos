import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = Number(input('Digite o valor de N: '))

    pegar_sequencia_fibonacci(N)

}

function pegar_sequencia_fibonacci(N){

    let contador = 0
    let valor_A = 0
    let valor_B = 1
    let valor_a_ser_exibido = valor_A

    while(contador <= N){
      
        console.log(valor_a_ser_exibido)
        valor_A = valor_B
        valor_B = valor_a_ser_exibido
        valor_a_ser_exibido = valor_A + valor_B
        contador++
    }

}

main()