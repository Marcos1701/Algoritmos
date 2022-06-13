import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf-8')



function main(){

    const vetor = organizar_e_retornar_valores()

    
   retorno_valores_vetor(vetor)
}


function organizar_e_retornar_valores(){

    const vetor_retorno = input.split('\n')

   for(let i = 0; i < vetor_retorno.length;i++){
       
       if(vetor_retorno[i] < 1){
           vetor_retorno[i] = 1
       }
   }

   return vetor_retorno

}


function retorno_valores_vetor(vetor){

    for(let i = 0; i < vetor.length; i++){
        const valor = parseInt(vetor[i])
        console.log(`X[${i}] = ${valor}`)
    }
}


main()