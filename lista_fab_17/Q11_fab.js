import prompt from 'prompt-sync';
const input = prompt()

function main(){

    const limite_inicial = Number(input('Digite o limite inicial: '))
    const limite_max = Number(input('Digite o limite final para coleta de multiplos: '))
     pegar_num_primos_intervalo(limite_inicial,limite_max)


}

function pegar_num_primos_intervalo(primeiro_valor,limite){

    let possivel_primo = primeiro_valor
    

    while(possivel_primo <= limite){
        if(eh_primo(possivel_primo) && possivel_primo !== 1){
            console.log(possivel_primo)
        }
        possivel_primo++
    }
}

function eh_primo(valor){

    let divisor = 2
    while(divisor < valor){
       if(valor % divisor === 0){
           return false
       }
       divisor++
    }
    return true
}

main()