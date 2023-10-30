const express = require('express');
const fs = require('fs');
const app = express();
let defaultView;
try {
	//se toma referencia desde la raíz cuando se usa nodemon
  defaultView = fs.readFileSync('./src/views/default.html', 'utf8');
  console.log("File Succesfully Readed");
} catch (error) {
  console.error('Error al leer el archivo:', error);
}
app.use(express.static('./src/public'));
app.post('/default', (req, res) => {
	res.json(defaultView);
});

app.listen(5000, () => {
  console.log(`Server listening on port 5000:`);
});