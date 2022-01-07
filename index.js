const express = require('express')
const app = express();
const path = require('path')
const port = 8000;


app.get('/', (req, res) => {
  res.sendFile('public/views/index.html', {root: __dirname })
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Thunderbite-test app listening on port ${port}!`)
});

