import prompt from 'prompt-sync'
const input = prompt()


function main(){
    
    console.log('Digite a frase: ')
    const frase = input('=> ')

    separar_palavras_da_frase(frase)
}

function separar_palavras_da_frase(frase){
 
    const palavras = frase.split(' ')
    for(let palavra of palavras){
        console.log(palavra)
    }
}

main()