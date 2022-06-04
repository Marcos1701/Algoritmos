import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const inicio_intervalo = Number(input('Digite o inicio do intervalo: '))
    const fim_intervalo = Number(input('Digite o fim do intervalo: '))

    pegar_pares_no_intervalo(inicio_intervalo,fim_intervalo)


}


function pegar_pares_no_intervalo(inicio,fim){

    for(let i = inicio;i <= fim; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}


main()