import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf-8')



function main(){

    const vetor = input.split('\n')

    
   retorno_valores_vetor(vetor)
}



function retorno_valores_vetor(vetor){

    for(let i = 0; i < vetor.length; i++){
        const valor = parseFloat(vetor[i])
        if(valor <= 10){
            console.log(`A[${i}] = ${valor.toFixed(1)}`)
        }
    }
}


main()