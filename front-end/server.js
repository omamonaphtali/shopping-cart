const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/shopping-cart'));

app.get('/*', (req, res) => {
  res.sendFile(path.join('./dist/shopping-cart/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Server started');
});