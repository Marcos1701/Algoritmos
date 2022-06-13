import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf-8')
const entradas = input.split('\n')


function main(){

    const qtd = Number(entradas[0])

    pegar_menor_num_em_um_vetor(qtd)

}


function pegar_menor_num_em_um_vetor(qtd){

    const vetor = entradas[1].split(' ')
    let menor_valor = vetor[0]
    let posicao_menor_valor = 0

    for(let i = 1;i < qtd;i++){
        const valor = Number(vetor[i])
        
        if(valor < menor_valor){
            menor_valor = valor
            posicao_menor_valor = i
        }
    }

    console.log(`Menor valor: ${menor_valor}`)
    console.log(`Posicao: ${posicao_menor_valor}`)
}


main()