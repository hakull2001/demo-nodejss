const express = require('express')
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world')
});

app.listen(300,()=>console.log('Server running on port 3000'))