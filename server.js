const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors('*'));


app.use('/api/admin', require('./routes/adminRoute'))
app.use('/api/customer', require('./routes/customerRoute'))
app.use('/api/customer', require('./routes/bookingRoute'))


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hi.."
    })
})
mongoose.connect(`mongodb+srv://almasApp:test123@cluster0.kzcp9.mongodb.net/roomBooking?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
mongoose.connection.on('error', err => {
    console.log(err);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is ready to run on the port ${PORT}`);

})