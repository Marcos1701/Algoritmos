import prompt from 'prompt-sync'
const input = prompt()


function main(){

 const senha = input('Digite uma senha: ')

 
let nova_senha = input('Digite uma senha: ')
 let senha_cencurada = cencurar_senha(nova_senha)

   while(nova_senha !== senha){
    
   console.log(`A senha inserida "${senha_cencurada}" está incorreta`)
   nova_senha = input('Digite uma senha: ')
   senha_cencurada = cencurar_senha(nova_senha)
 }
 console.log(`A senha inserida "${senha_cencurada}" está correta `)

}

function cencurar_senha(senha){
    let senha_retorno = ''

    for(let i = 0;i < senha.length;i++){
        senha_retorno += '*'
    }
    return senha_retorno
}

main()