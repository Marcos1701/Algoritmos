import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const N = Number(input('Digite um valor: '))
    const menor_limite = Number(input('Digite o limite inicial: '))
    const limite_final = Number(input('Digite o limite final: '))

    pegar_multiplos_de_n_no_intervalo(N,menor_limite,limite_final)

}

function pegar_multiplos_de_n_no_intervalo(N,inicio,fim){

    for(let i = inicio;i <= fim;i++){
        if(i % N === 0){
            console.log(i)
        }
    }
}


main()