class Funcionario {
    public nome : string
    public idade : number
    public anoDeIngressamento : number
    public idDeAcesso : string
}

const employee : Funcionario = new Funcionario();
employee.nome = 'Lucas Silva'
employee.idade = 26
employee.anoDeIngressamento = 2006
employee.idDeAcesso = '41605215'

console.log('O nome do funcionário é: ' + employee.nome)
console.log('Sua idade é: ' + employee.idade)
console.log(`Seu ano de ingressamento na empresa foi em ${employee.anoDeIngressamento}`)
console.log(`Seu id de acesso é ${employee.idDeAcesso}\n\n`)