const experess = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = experess();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello from server')
});

app.post('/enroll', (req, res) => {
    console.log(req.body);
    res.status(200).send({ "message": "Data Received" });
})

app.post('/forgotpassword', (req, res)=>{
    console.log(req.body);
    res.status(200).send({"message": "Data Received"});
})

app.post('/resetpassword', (req, res)=>{
    console.log(req.body);
    res.status(200).send({"message": "Data Received"});
})

app.listen(PORT, function () {
    console.log("Server running on localhost: ", PORT);
})