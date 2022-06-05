import prompt from 'prompt-sync'
const input = prompt()


function main(){
 
    console.log('Digite um verbo terminados em ER: ')
    const verbo = input('=> ')

    if(verbo[verbo.length - 2] === 'e' && verbo[verbo.length - 1] === 'r'){
    verbo_sem_er(verbo)
    }else{
        console.log('O verbo inserido não termina em ER')
    }
}

function verbo_sem_er(verbo){
    const verbo_fragmentado = verbo.split('')
    let radical = ''

    for(let i = 0;i < (verbo_fragmentado.length - 2); i++){
            radical += verbo_fragmentado[i]
    }
    conjugar_verbo_presente(radical)
}


function conjugar_verbo_presente(radical){

    console.log('conjugação do verbo no presente: ')
    console.log(`Eu   - ${radical}o`)
    console.log(`Tu   - ${radical}es`)
    console.log(`Ele  - ${radical}e`)
    console.log(`Nós  - ${radical}emos`)
    console.log(`Vós  - ${radical}eis`)
    console.log(`Eles - ${radical}em`)
    
    
}

main()