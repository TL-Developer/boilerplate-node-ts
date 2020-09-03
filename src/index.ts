import express from 'express';

const PORT = 8080; // Porta do nosso servidor web

const app = express(); // Criamos uma instância do express

// Adicionamos uma rota de teste
app.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello Worldddd',
  });
});

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
  console.log(`Aplicação escutando na porta ${PORT}`);
});
