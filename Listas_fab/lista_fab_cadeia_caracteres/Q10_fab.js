import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const palavra = input('Digite a palavra: ')

   conferir_se_eh_palindroma(palavra)

}

function conferir_se_eh_palindroma(palavra){

    let inverso_palavra = ''

    for(let i = palavra.length - 1; i >= 0; i--){
        inverso_palavra += palavra[i]
    }
    
    if(palavra === inverso_palavra){
        console.log('A palavra inserida é palíndroma')
    }else{
        console.log('A palavra inserida não é palíndroma')
    }
}


main()