const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/api/task', (req, res) => {

    res.json({ message: 'Hello!'});

});

app.listen(8000, () => {
    console.log('Server is runing on http://127.0.0.1:8000');
});