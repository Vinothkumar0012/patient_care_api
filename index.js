const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config()

const { bookAppointment } = require('./routes/bookAppointment.route');
const { getAppointment } = require('./routes/getAppointments.route');
const { getDoctors } = require('./routes/getDoctors.route');
const { login } = require('./routes/login.route');

const app = express();

app.use(cors({ origin: '*' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/doctors', getDoctors);

app.post('/bookAppointment', bookAppointment)

app.get('/getAppointments', getAppointment)

app.post('/login', login)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});