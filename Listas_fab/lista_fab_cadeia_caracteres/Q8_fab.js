import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const horario_inserido = input('Digite o horario (no formato hh:mm:ss): ')

  const [horas,minutos,seguntos] = horario_inserido.split(':')
  console.log(`${horas} hora(s), ${minutos} minuto(s) e ${seguntos} segundo(s)`)
}

main()