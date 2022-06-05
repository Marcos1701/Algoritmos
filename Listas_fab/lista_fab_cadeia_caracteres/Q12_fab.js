import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const nome = input('Nome completo: ')
    const nome_fragmentado = nome.split(' ')

  console.log(`${nome_fragmentado[nome_fragmentado.length - 1]}/${nome_fragmentado[0]}`)
}

main()