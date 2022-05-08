const express = require('express')
const ejsLayout = require('express-ejs-layouts')
const cors = require('cors')
const methodOverride = require('method-override');

const foodController = require('./controllers/foodController')

const app = express()
app.use(ejsLayout);

app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use(cors())

app.use(foodController);


const port = process.env.PORT || 3885

app.listen(port, ()=>{
    console.log(`PORT:${port}`);
})