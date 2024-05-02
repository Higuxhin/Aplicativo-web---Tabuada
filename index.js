import express from 'express';

const app = express();

const host = '0.0.0.0'; 
const porta = 3000; 

function Tabuada(requisicao, resposta){
    try{
        const valor = Number(requisicao.query.valor);
        let Conteudo = 
        `<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tabuada 1 ao 20</title>
            </head>
            <body>
               <h1 style="color: pink">TABUADA DO 1 AO 20 DO NÚMERO ${valor}</h1>
             <ul>
        `;
            
        for (let i=1; i<=20; i++){
            const linha = `<li>${valor} x ${i} = ${valor * i}</li>`;0
            Conteudo += linha;
        }
        Conteudo+= `</ul>
                        </body>
                        <html>`
        resposta.end(Conteudo);
    } catch(erro){
        resposta.end(`<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Erro ao processar</title>
            </head>
            <body>
               <h1>Erro</h1>
               <h3>${erro.message}</h3>
             <ul>
        `);
    }}


app.get('/tabuada', Tabuada);
""
app.listen(porta, host, () => {
   
    console.log("Servidor está execultado em http://" + ":" + porta);
});