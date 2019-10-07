const express = require('express');
const app = express();

// add CORS
const cors = require('cors');

// add app-level middleware
app.use(cors());

app.set('port', process.env.NODE_ENV || 3001)
app.locals.title = "Snack Box";
app.locals.snacks = [
  { id: 1, name: "Cheez-its", type: "chips" },
  { id: 2, name: "Reeses", type: "candy" },
  { id: 3, name: "Cheerios", type: "cereal" },
  { id: 4, name: "Tortila Chips", type: "chips" }
];
app.use(express.json());

app.get('/', (request, response) => {
  return response.send('Oh a Snack Box!!!');
});

app.get('/api/v1/snacks', (request, response) => {
  const { snacks } = app.locals;
  return response.status(200).json({snacks})
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on PORT ${app.get('port')}`);
});