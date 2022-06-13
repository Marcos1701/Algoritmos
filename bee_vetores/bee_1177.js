import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf-8')


function main(){

    const valor = Number(input)

    const vetor = gerar_e_organizar_vetor(valor)

    retornar_vetor(vetor)

}


function gerar_e_organizar_vetor(valor){

   const vetor = new Array(1000)

   let elemento = 0   

   for(let i = 0; i < vetor.length; i++){
    
       if(elemento === valor){
           elemento = 0
        }

        vetor[i] = elemento
        elemento++
   }

   return vetor

}


function retornar_vetor(vetor){

    for(let i = 0; i < vetor.length; i++){
        console.log(`T[${i}] = ${vetor[i]}`)
    }
}



main()