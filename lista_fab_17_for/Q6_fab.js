import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const num = Number(input('Digite um valor: '))

    pegar_tabuada_ate_10(num)

}

function pegar_tabuada_ate_10(num){

    for(let i = 1;i <= 10;i++){
        console.log(`${i}x${num} = ${i * num}`)
    }
}


main()