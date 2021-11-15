const express = require('express');
const cors = require('cors');

const app = express();
//-----

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// analizar solicitudes de tipo de contenido - application/json
app.use(express.json()); //Este método se llama como middleware en la aplicación

// analizar solicitudes de tipo de contenido - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// urlencoded es para reconocer el objeto de solicitud entrante como cadenas o matrices.
// son usados para solicitudes PUT y POST, son para envios de datos (objeto) al servidory le está pidiendo al servidor que acepte o almacene esos datos (objeto)

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome perron a la application.' });
});

require('./app/routes/tutorial.routes.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require('./app/models');

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});
