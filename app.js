const { createProxyMiddleware } = require('http-proxy-middleware');
const {getSpecificQuantityRecipes,getRecipes,deleteUnavailables,loadBulkRecipesIntoDb,loadNewRecipeIntoDb,unavailableReplacer}=require('./dal/db')
const app = require('express')();
app.use(require('cors')())
const {promiseDataToResponse} = require('./utils/requestUtils')
app.use(require('morgan')('combined'))
app.use('/receita', createProxyMiddleware({ target: 'https://receitas.moulinex.pt/companion', changeOrigin: true }));

app.get('/api',(req,res) => {
    res.headers = {
        'Content-type': 'application/json'
    };
    getRecipes().then(data=>{
        res.status(200).send(data);
    });
});

app.get('/api/range/:first/:limit',(req,res) => {
    res.headers = {
        'Content-type': 'application/json'
    };
    const {first,limit} = req.params;
    getSpecificQuantityRecipes(first,limit).then(data=>{
        res.status(200).send(data);
    });
});

app.listen(process.env.PORT,() => console.log('Server started on port 3001'));

//Max number of available recipes 3538
//const asyncBdLoader=setInterval(() =>getTotalNumberOfRecipes().then(count=>count>3500?clearInterval(asyncBdLoader):loadBulkRecipesIntoDb()),25000)
module.exports = app;
