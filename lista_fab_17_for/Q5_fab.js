import prompt from 'prompt-sync'
const input = prompt()


function main(){

 const num = Number(input('Digite um valor: '))

 pegar_fatorial(num)

}


function pegar_fatorial(num){

    let fatorial = num
    
    for(let i = num - 1;i > 0; i--){

        fatorial *= i 
    }
    console.log(`O fatorial desse número é ${fatorial}`)
}


main()