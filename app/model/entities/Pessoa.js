var Pessoa = function () {
    var id;
    var nome;
    var idade;
    var sexo;

    this.setId = function (codigo) {
        id = codigo;
    };

    this.getId = function () {
        return id;
    };

    this.setIdade = function (age) {
        idade = age;
    };

    this.getIdade = function () {
        return idade;
    };

    this.setNome = function (name) {
        nome = name;
    };

    this.getNome = function () {
        return nome;
    };

    this.setSexo = function (sexy) {
        sexo = sexy;
    };

    this.getSexo = function () {
        return sexo;
    }
};

module.exports = Pessoa;