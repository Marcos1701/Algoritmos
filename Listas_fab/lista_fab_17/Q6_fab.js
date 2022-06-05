import prompt from 'prompt-sync'
const input = prompt()


function main(){

    
    let valor = Number(input('Digite o valor: '))
    pegar_tabuada(valor)

}

function pegar_tabuada(valor){

    let multiplicador = 1

    while(multiplicador <= 10){
       console.log(`${valor}x${multiplicador} = ${valor * multiplicador}`)
        multiplicador++
    }
    

}


main()