import prompt from 'prompt-sync'
const input = prompt()


function main(){
    
    console.log('Digite a data (DD/MM/AAAA): ')
    const data = input('=> ')

    const [dia,mes,ano] = data.split('/')
    const mes_por_estenso = pegar_mes_por_estenso(mes)

    console.log(`${dia} de ${mes_por_estenso} de ${ano}`)
}


function pegar_mes_por_estenso(mes){

    let mes_por_extenso = ''
  
    if(mes == 1){
        return 'Janeiro'
    }else if(mes == 2){
        return 'Fevereiro'
    }else if(mes == 3){
        return 'Março'
    }else if(mes == 4){
        return 'Abril'
    }else if(mes == 5){
        return 'Maio'
    }else if(mes == 6){
        return 'Junho'
    }else if(mes == 7){
        return 'Julho'
    }else if(mes == 8){
        return 'Agosto'
    }else if(mes == 9){
        return 'Setembro'
    }else if(mes == 10){
        return 'Outubro'
    }else if(mes == 11){
        return 'Novembro'
    }else if(mes == 12){
        return 'Dezembro'
    }else{
        console.log('Mês inválido!!')
    }
    
}

main()