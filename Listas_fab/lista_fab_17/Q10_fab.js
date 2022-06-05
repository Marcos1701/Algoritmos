import prompt from 'prompt-sync';
const input = prompt()

function main(){

    const limite_inicial = Number(input('Digite o limite inicial: '))
    const limite_max = Number(input('Digite o limite final para coleta de multiplos: '))
     pegar_multiplos_intervalo(2,limite_inicial,limite_max)


}

function pegar_multiplos_intervalo(valor,primeiro_valor,limite){

    let valores = primeiro_valor

    while(valores <= limite){
        if(valores % valor !== 0){
            console.log(valores)
        }
        valores++
    }
}

main()