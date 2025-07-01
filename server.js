const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur ULBU Nova 🚀');
});

app.listen(PORT, () => {
  console.log(`Serveur en marche sur le port ${PORT}`);
});
