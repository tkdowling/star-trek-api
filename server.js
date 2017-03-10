const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const livereload = require('express-livereload');

const restCtrl = require('./controllers/restCtrl');
const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());


app.get('/api/people', restCtrl.readList);
app.get('/api/people/:id', restCtrl.read);
app.post('/api/people', restCtrl.create);


livereload(app);
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
