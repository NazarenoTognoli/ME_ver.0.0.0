const express = require('express');
const fs = require('fs');
const app = express();
let defaultView;
try {
  defaultView = fs.readFileSync('./views/default.html', 'utf8');
  console.log("File Succesfully Readed (defaultView)");
} catch (error) {
  console.error('Error al leer el archivo:', error);
}
app.use(express.static('./public'));
app.post('/default', (req, res) => {
	res.json(defaultView);
});

app.listen(5000, () => {
  console.log(`Server listening on port 5000:`);
});