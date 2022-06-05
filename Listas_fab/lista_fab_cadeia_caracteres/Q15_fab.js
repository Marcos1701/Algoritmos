import prompt from 'prompt-sync'
const input = prompt()


function main(){

    console.log('Digite o comando (ex: 10, Algoritmos): ')
    const comando = input('=> ').split(', ')

    retorno(comando)
}


function retorno(comando){
    const num_espacos = comando[0]
    const caracteres = comando[1].split('')
    let msg_a_ser_exibida =  ''

  for(let i = 0; i < caracteres.length; i++){
      msg_a_ser_exibida += org_retorno(num_espacos,caracteres[i])
  }

  console.log(msg_a_ser_exibida)
}

function org_retorno(num_espacos,caractere){

  let msg_retorno = ''
  let espacos = 0
    while(espacos <= num_espacos){
      if(espacos < num_espacos){
        msg_retorno += ' '
      }else{
        msg_retorno += `${caractere}\n`
      }
        espacos++
    }

    return msg_retorno
}


main()