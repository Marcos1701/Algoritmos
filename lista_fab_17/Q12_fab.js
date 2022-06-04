import fs from 'fs'
const input = fs.readFileSync('lista_q12', 'utf-8')


function main(){
    const numeros = (input.split('\n')).map(Number)


    somar_numeros_e_pegar_media(numeros)


}

function somar_numeros_e_pegar_media(numeros){

    let i = 0
    let soma = 0

    while(i < numeros.length){
        soma += numeros[i]
        i++
    }

    const media = soma / (numeros.length)

    console.log(`soma dos valores = ${soma}
media = ${media.toFixed(2)}`)
    
}

main()