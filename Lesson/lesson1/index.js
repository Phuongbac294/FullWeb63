const exp = require('express');
const Dpipe = require('./Local_modules/pipe_diameter')

const app = exp();

const port = 3001;

const Da = Dpipe(140, 1, 0.05, 240)
app.get('/', (rep, res) => {
    res.end(`Hello Web lesson1 ${Da}`)
})

app.listen(port, ()=> {
    console.log(`App running on port ${port}`);
})