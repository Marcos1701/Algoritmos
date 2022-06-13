import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf-8')


function main(){

    const valor = Number(input)

    const vetor = gerar_e_organizar_vetor(valor)

    retornar_vetor(vetor)

}


function gerar_e_organizar_vetor(valor){

   const vetor = new Array(10)

   vetor[0] = valor

   for(let i = 1; i < vetor.length; i++){
       vetor[i] = vetor[i - 1] * 2
   }

   return vetor

}


function retornar_vetor(vetor){

    for(let i = 0; i < vetor.length; i++){
        console.log(`N[${i}] = ${vetor[i]}`)
    }
}



main()