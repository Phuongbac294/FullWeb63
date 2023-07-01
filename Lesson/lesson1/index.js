const exp = require('express');
const Dpipe = require('./Local_modules/pipe_diameter')
const Qflow = require('./Local_modules/Q_flow');
const Vflow = require('./Local_modules/V_flow');
const Vglobe = require('./Local_modules/v_globe');

const app = exp();

const port = 3001;
app.use(exp.json());

const Da = Dpipe(140, 1, 0.05, 240)
const Mh = Qflow(500, 1, 25, 0.5415, 49.79);
const V = Vflow(2010, 1, 25, 0.5415, 49.79);
const v1 = Vglobe(10);
app.get('/', (rep, res) => {
    res.send(`Hello Web lesson1 `);
})

app.get('/orders/:orderId/:custId', (req, res) => {
    const { orderId, custId } = req.params;
    console.log(`Order ${orderId} and ${custId}`);
    res.send(`Hello ${orderId} ${custId}`);
})

app.get('/orders', (req, res) => {
    const {userId} = req.query;
    const {token} = req.headers;
    res.send(`Hello web ${userId} and token ${token}`);
})

app.post('/orders', (req, res) => {
    let data = req.body;
    console.log(data);
    res.send(`Data write `);
    res.json({status: 1, message: 'Hello web'});
})

app.listen(port, ()=> {
    console.log(`App running on port ${port}`);
})