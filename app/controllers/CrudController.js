var PessoaDao = require('../model/dao/PessoaDao');
var Pessoa    = require('../model/entities/Pessoa');

module.exports = function (app, connection) {
    var pessoadao = new PessoaDao(connection);
    app.get('/', function(request, response) {
        response.render('pessoa/create');
    });
    app.get('/index', function(request, response){
        console.log('index');
    });

    app.get('/pessoa/cadastrar', function(request, response){
        response.render('pessoa/create');
    });

    app.get('/pessoa/index', function (request, response) {
          var  pessoas = pessoadao.listar();
          reponse.render('pessoa/index');
    });

    app.post('/pessoa/cadastrar-post', function(request, response){
        var requestBody = request.body;
        var pessoa      = new Pessoa();
        pessoa.setNome(requestBody.nome);
        pessoa.setIdade(requestBody.idade);
        pessoa.setSexo(requestBody.sexo);

        try {
            pessoa = pessoadao.inserir(pessoa);
        } catch (e) {
            console.log(e);
        }

        response.redirect('/pessoa/index');
    });

    app.post('/pessoa-delete', function(request, response){
        console.log('deletar pessoa');
    });

    app.post('/pessoa-update', function(request, response){
        console.log('atualizar pessoa');
    });
};