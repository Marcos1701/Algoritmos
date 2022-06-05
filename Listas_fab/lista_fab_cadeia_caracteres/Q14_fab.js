import fs from 'fs'
import prompt from 'prompt-sync'
const entradas = fs.readFileSync('lista_teste_q14', 'utf-8').split('\n')
const input = prompt()


function main(){

    const senhas = pegar_senhas()
  
    const senha_usuario = input('Digite sua senha: ')

    conferir_senha(senhas,senha_usuario)

}


function pegar_senhas(){

    let senhas = ''
     
    for(let indice in entradas){
        const nome = entradas[indice].split(' ')
        const iniciais = pegar_iniciais(nome)
      
      senhas += `${iniciais} `
    }
      return senhas.split(' ')
  
  }

function pegar_iniciais(nome){

    let iniciais = ''
    for(let i = 0;i < nome.length; i++){
        const frag_nome = nome[i].split('')
        if(eh_maiuscula(frag_nome[0])){
          iniciais += frag_nome[0]
        }
    }

  return iniciais
}
  
  
  function eh_maiuscula(letra){
      const cod_caractere = letra.charCodeAt(0)
     return (65 <= cod_caractere && cod_caractere <= 90)
  }

 function conferir_senha(senhas,senha_usuario){

    
    for(let i in senhas){
      if(senhas[i] === senha_usuario){
          console.log('Senha correta, acesso liberado')
      }
    }
  console.log('Senha incorreta, acesso negado!!')
 }



main()