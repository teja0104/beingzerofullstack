const express = require('express')
const app = express()
const port = process.env.PORT||3000
const path= require('path')


app.use(express.static(__dirname+'/dist/ngproject'));
app.get('/', (req, res) => res.sendFile(path.join(__dirnmae+'/dist/ngproject/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))