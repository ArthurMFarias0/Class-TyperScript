var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());
var client = new Cliente();
client.nome = 'Arthur';
client.idade = 18;
client.sexo = 'Masculino';
client.bairro = 'Caju';
console.log('Nome: ' + client.nome);
console.log('Idade: ' + client.idade);
console.log("O sexo do Cliente \u00E9 ".concat(client.sexo));
console.log("O cliente mora no(a) ".concat(client.bairro, "\n\n"));
var Aviao = /** @class */ (function () {
    function Aviao() {
    }
    return Aviao;
}());
var airplane = new Aviao();
airplane.veloMax = '600km/h';
airplane.ano = 2008;
airplane.modelo = 'A320';
airplane.companhia = 'Gol';
console.log('Velocidade máxima: ' + airplane.veloMax);
console.log('Ano de fabricação: ' + airplane.ano);
console.log("O modelo do avi\u00E3o \u00E9 ".concat(airplane.modelo));
console.log("A companhia \u00E9 ".concat(airplane.companhia, "\n\n"));
var ProdutoEletronico = /** @class */ (function () {
    function ProdutoEletronico() {
    }
    return ProdutoEletronico;
}());
var telephone = new ProdutoEletronico();
telephone.ano = 2020;
telephone.modelo = 'A20';
telephone.companhia = 'Samsung';
console.log('\nAno de fabricação: ' + telephone.ano);
console.log("O modelo do celular \u00E9 o  ".concat(telephone.modelo));
console.log("A marca do celular \u00E9 a ".concat(telephone.companhia, "\n\n"));
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    return Funcionario;
}());
var employee = new Funcionario();
employee.nome = 'Lucas Silva';
employee.idade = 26;
employee.anoDeIngressamento = 2006;
employee.idDeAcesso = '41605215';
console.log('O nome do funcionário é: ' + employee.nome);
console.log('Sua idade é: ' + employee.idade);
console.log("Seu ano de ingressamento na empresa foi em ".concat(employee.anoDeIngressamento));
console.log("Seu id de acesso \u00E9 ".concat(employee.idDeAcesso, "\n\n"));
