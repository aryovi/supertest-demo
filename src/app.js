const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./router')

app.set('PORT', 3000)
app.use(express.json());
app.use(morgan('dev'));
app.use(router);

app.listen(app.get('PORT'), () => {
    console.log(`listen on port ${app.get('PORT')}`);
})

module.exports = app