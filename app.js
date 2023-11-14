const express = require('express');
const fs = require('fs');
const app = express();
let viewDefault;
let viewISH;
try {
  viewDefault = fs.readFileSync('./views/default.html', 'utf8');
  console.log("File Succesfully Readed (viewDefault)");
} catch (error) {
  console.error('Error al leer el archivo:', error);
}
try {
  viewISH = fs.readFileSync('./views/ISH.html', 'utf8');
  console.log("File Succesfully Readed (viewISH)");
} catch (error) {
  console.error('Error al leer el archivo:', error);
}
app.use(express.static('./public'));
app.post('/default', (req, res) => {
	res.json(viewDefault);
});
app.post('/ISH', (req, res) => {
  res.json(viewISH);
});

app.listen(5000, () => {
  console.log(`Server listening on port 5000:`);
});