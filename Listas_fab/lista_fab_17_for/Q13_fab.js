import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const maior_valor = pegar_valores_de_n()


    console.log(`O maior número dentre os inseridos é: ${maior_valor}`)

}

function pegar_valores_de_n(){
    console.log('Valor parada = FIM')
    let N = input('N: ')
    let maior_num = Number(N)
    let qtd = 0
    
    for(;N != 'FIM';qtd++){
    const num = Number(N)
        if(num > maior_num){
        maior_num = Number(N)
    }
        N = input('N: ')
    }
    return maior_num
   
}

main()