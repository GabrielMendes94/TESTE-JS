const express = require('express');
const app = express();
const porta = 3333;

app.listen(porta, function() {
    console.log("Servidor rodando na porta",+porta);
});

app.get('', (request, response) => {
    // console.log('server ok');
    return response.send('Hello World!')
});