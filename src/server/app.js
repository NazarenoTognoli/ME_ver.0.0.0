const express = require('express');
const app = express();

app.use(express.static('../public'));

app.get('/', (req, res) => {
	res.json("Everything OK");
});

app.listen(5000, () => {
  console.log(`Server listening on port 5000:`);
});