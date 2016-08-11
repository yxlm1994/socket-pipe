// Generated by CoffeeScript 1.10.0
(function() {
  var Net;

  Net = require('net');

  module.exports = (function() {
    function _Class(localAddress, remoteAddress) {
      var server;
      server = Net.createServer(function(client) {
        var socket;
        socket = Net.connect(remoteAddress.port, remoteAddress.ip);
        client.pipe(socket).pipe(client);
        console.info("request " + client.remoteAddress + ":" + client.remotePort);
        return client.on('error', console.error);
      });
      server.listen(localAddress.port, localAddress.ip);
      server.on('error', server.error);
    }

    return _Class;

  })();

}).call(this);