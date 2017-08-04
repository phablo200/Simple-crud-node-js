var Connect = function () {
    var config = require('../../config.js');
    var mysql  = require('mysql');
    var connected = null;

    this.getConnect = function (){
        var conn = mysql.createConnection(config);
        if (!conn) {
            throw "CONEXÃO NÃO PODER SER ESTABELECIDA";
        }
        return conn;
    };

    this.connected = function () {
        var connect = this.getConnect();
        return connect.connected();
    };

    this.desconnected = function () {
        var connect = this.getConnect();
        return connect.desconnected();
    };
};

module.exports = Connect;