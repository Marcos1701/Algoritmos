import prompt from 'prompt-sync'
const input = prompt()


function main(){

    console.log('Digite o texto: ')
    const texto = input('=> ')

    const caracteres_texto = texto.split('')
    pegar_trecho_desejado(caracteres_texto)
}


function pegar_trecho_desejado(texto){

    

 console.log('Digite o intervalo do trecho a ser substituido e oq irá substitui-lo (ex: 10, 20, teste12345): ')

    const comando = input('=> ').split(', ')
    const inicio_intervalo = Number(comando[0])
    const final_intervalo = Number(comando [1])
    const trecho_substituto = comando[2].split('')
    let trecho_a_ser_exibido =  ''
    let indice = 0

  for(let i = 0; i < texto.length; i++){

    if(i < inicio_intervalo || i > final_intervalo){
        trecho_a_ser_exibido += texto[i]
    }else{
        trecho_a_ser_exibido += trecho_substituto[indice]
        indice++
    }
  }

  console.log(trecho_a_ser_exibido)
}



main()