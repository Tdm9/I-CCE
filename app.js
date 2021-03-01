const {getSpecificQuantityRecipes,getRecipes}=require('./dal/db');
const app = require('express')();
app.use(require('cors')());
app.use(require('morgan')('combined'));

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

module.exports = app;
