import prompt from 'prompt-sync'
const input = prompt()


function main(){

  const nome = input('nome: ')

  const nome_fragmentado = nome.split(' ')

  const primeiras_letras_do_nome = pegar_primeiras_letras(nome_fragmentado)

  console.log(`${nome_fragmentado[nome_fragmentado.length - 1]} ${primeiras_letras_do_nome}`)

}


function pegar_primeiras_letras(nome){

  let retorno = ''
   
    for(let i = 0;i < (nome.length - 1); i++){
        const frag_nome = nome[i].split('')
        if(eh_maiuscula(frag_nome[0])){
        retorno += `${frag_nome[0]}. `
        }
    }
    return retorno

}


function eh_maiuscula(letra){
    const cod_caractere = letra.charCodeAt(0)
   return (65 <= cod_caractere && cod_caractere <= 90)
}


main()