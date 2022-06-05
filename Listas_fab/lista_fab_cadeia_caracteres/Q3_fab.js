import prompt from 'prompt-sync'
const input = prompt()


function main(){
    
    console.log('Digite a frase: ')
    const frase = input('=> ')

    const frase_sem_espacos = pegar_nova_frase(frase)

    console.log(frase_sem_espacos)
}


function pegar_nova_frase(frase){
    const palavras = frase.split(' ')

    let frase_retorno = ''
  for(let palavra of palavras){
      frase_retorno += palavra
  }
  return frase_retorno
}

main()