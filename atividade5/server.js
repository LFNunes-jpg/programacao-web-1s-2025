const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/agendar', (req, res) => {
  const dados = req.body;

 
  for (const campo in dados) {
    if (campo !== 'observacao' && dados[campo].trim() === '') {
      return res.send('Erro: Todos os campos obrigatórios devem ser preenchidos.');
    }
  }

  const dataAgendada = new Date(dados.dataHora);
  const agora = new Date();

  if (dataAgendada <= agora) {
    return res.send('Erro: A data do agendamento deve ser no futuro.');
  }

 
  res.send('Consulta agendada com sucesso!');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
