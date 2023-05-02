const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const chefs = require('./data/chef.json');
const recipes = require('./data/recipe.json');


app.get('/', (req, res) => {
    res.send('master-chef API server');
})


// get chefs
app.get('/chef', (req, res) => {
    res.send(chefs);
})

// get recipes
app.get('/recipe', (req, res) => {
    res.send(recipes);
})


// find all recipes of specific chef
app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const recipeByChef = recipes.filter(recipe => recipe.chef_id === id);
    res.send(recipeByChef || []);
})

app.listen(port, () => {
    console.log(`master-chef is running on: ${port}`);
})