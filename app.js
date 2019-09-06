const {app, express} = require('./config/server');

app.use(express.static(__dirname + '/app/public'));

app.get('/', function(req,res){
    res.render('pages/index');
});


var request = require('request');
request('http://www.transparencia.gov.br/api-de-dados/servidores/por-orgao?Pagina=1', function (error, response, body) {
  const options = {
    url: 'http://www.transparencia.gov.br/api-de-dados/servidores/por-orgao?Pagina=1',
    headers: {
      'User-Agent': 'request',
      'method': 'POST'
    }
  };
  
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        console.log(info);
    }
  }
  
  request(options, callback);
});

app.listen(3000);
