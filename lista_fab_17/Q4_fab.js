import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const valor_inicial = Number(input('Digite o primeiro valor da PG: '))
    const limite = Number(input('Digite o número de elementos que deseja da PG: '))
    const razao = Number(input('Digite a razao da PG: '))

    dados_retorno_PG(valor_inicial,limite,razao)
}

function dados_retorno_PG(valor_inicial,limite,razao){

    let valores_pg = valor_inicial
    let contador = 0

    while(contador < limite){

        console.log(valores_pg)
        valores_pg *= razao
        contador++
    }
}

main()