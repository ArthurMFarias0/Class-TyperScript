class Cliente {
    public nome : string
    public idade : number
    public sexo : string
    public bairro : string
}

const client : Cliente = new Cliente();
client.nome = 'Arthur'
client.idade = 18
client.sexo = 'Masculino'
client.bairro = 'Caju'

console.log('Nome: ' + client.nome)
console.log('Idade: ' + client.idade)
console.log(`O sexo do Cliente é ${client.sexo}`)
console.log(`O cliente mora no(a) ${client.bairro}\n\n`)
