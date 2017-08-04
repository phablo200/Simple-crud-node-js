var PessoaDao = function (con) {
    var connection = con;
    var pessoas = [];
    self = this;

    this.setPessoas = function (people) {
        pessoas = people;
    };

    this.getPessoas = function () {
        return pessoas;
    };

    this.inserir = function (pessoa) {
        if (!pessoa) {
            throw "PESSOA INVALIDA";
        }

        var sqlReturn = "SELECT nom, idade, sexo, id FROM pesso ORDER BY id DESC LIMIT 1";
        var sql =  "INSERT INTO pessoa (nome, idade, sexo) VALUES ('name', 'age', 'sexy')"
            .replace("name", pessoa.getNome())
            .replace("age",  pessoa.getIdade())
            .replace("sexy", pessoa.getSexo());
        var con = connection.getConnect();

        var liberar = false;
        con.query(sql, function (err, rows, fields) {
            if (err) {
                throw "ERRO NA INSERÇÃO PESSOA";
            }

            if (rows) {
                liberar = true;
            }
        });
        con.end();

        if (liberar) {
            con = connection.getConnect()
            con.query(sqlReturn, function (err, rows, fields) {
                //this.setPessoas(rows);
            });
            con.end();
        }
    };

    this.atualizar = function () {
        console.log("Atualizar")
    };

    this.deletar = function () {
        console.log("Deletar");
    };

    this.listar = function () {
        var conn = connection.getConnect();
        var sqlReturn = "SELECT nome, idade, sexo, id FROM pessoa";
        var result = [];

        setTimeout(function(){
            conn.query(sqlReturn, function (err, rows, fields) {
                self.setPessoas(rows)
            });
        }, 0);

        return self.getPessoas();
    }
};

module.exports = PessoaDao;