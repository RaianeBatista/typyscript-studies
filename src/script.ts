//Inferência literal
function fazerRequisicao(url: string, method: 'GET' | 'POST') {
  //...
}

// type Methods = 'GET' | 'POST'

// let url = 'https://google.com.br';
// let method: Methods = 'GET';

//method = 'bla bla'
// fazerRequisicao(url, method);


type RequetsDetails = {
    url: string,
    method: 'GET' | 'POST'
}

let req: RequetsDetails = {
  url: 'https://google.com.br',
  method: 'GET',
};

req.method = 'POST'

fazerRequisicao(req.url, req.method);
