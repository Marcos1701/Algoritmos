import fs from 'fs'
const input = fs.readFileSync('lista_q13', 'utf-8')


function main(){

   const numeros = input.split('\n').map(Number)

   pegar_maior_num(numeros)

}

function pegar_maior_num(numeros){

    let indice = 0
    let maior_num = 0

    while(indice < numeros.length){
        if(numeros[indice] > maior_num){
            maior_num = numeros[indice]
        }
        indice++
    }

    console.log(`o maior número dentre os da lista é ${maior_num}`)
}

main()