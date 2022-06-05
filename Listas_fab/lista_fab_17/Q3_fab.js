import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const valor_inicial = Number(input('Digite o primeiro valor da PA: '))
    const limite = Number(input('Digite o número de elementos que deseja da PA: '))
    const razao = Number(input('Digite a razao da PA: '))

    dados_retorno_PA(valor_inicial,limite,razao)
}

function dados_retorno_PA(valor_inicial,limite,razao){

    let valores_pa = valor_inicial
    let contador = 0

    while(contador < limite){

        console.log(valores_pa)
        valores_pa += razao
        contador++
    }
}

main()