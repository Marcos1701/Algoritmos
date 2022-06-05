import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const frase = input('Digite a frase: ')
    const palavras = frase.split(' ')

    console.log(`A frase inserida possui ${palavras.length}`)

}

main()