const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const caData = require('./ca.json')
const details = require('./details.json')

app.get('/data', (req, res) => {
    res.send(caData)
});

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const caData = details.find(detail => detail.id == id);
    res.send(caData)
})

app.get('/', (req, res) => {
    res.send('ca calculating')
})

app.listen(port, () => {
    console.log(`ca is running: ${port}`)
})