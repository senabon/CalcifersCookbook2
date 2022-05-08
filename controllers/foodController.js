const express = require('express')
const Recipe =require('../models/recipeModel')
//const food = require('../db/foodRecipes')

const router = express.Router();

router.get('/', (req, res)=>{
    Recipe.find({})
    .then((food)=> res.render('index', {stuff: food}))
    .catch((error)=>console.log(`route failed!:${error}`))
});

router.get('/new', (req,res)=>{
    console.log("new route");
    res.render('new')
})


//creates and returns
router.post('/add', (req, res)=>{
    Recipe.create(req.body)
        .then(()=>res.redirect('/'))
        .catch((error)=>console.log(`route failed!:${error}`))
})

//deletes recipes                                   -----delete-----
router.delete("/:id", (req, res)=>{
    Recipe.findOneAndRemove({_id: req.params.id}, req.body)
        .then((food)=> res.redirect('/')) /////check this line
        .catch((error)=>console.log(`route failed!:${error}`))
})

//updates added recipes                                        ------update------
router.put("/:id", (req, res)=>{
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body)
        .then((food)=> res.redirect('/'))
        .catch((error)=>console.log(`route failed!:${error}`))
})

router.get("/:id", (req, res)=>{
    Recipe.findById(req.params.id)
    .then(food=>{
        res.render('edit', food)
    })
    .catch((error)=>console.log(`route failed!:${error}`))
})




module.exports = router;