const model= require('./modelSetup')();
const fetch= require('node-fetch');
const parser= require('../scrapperParser');

const fetchAndParseRecipe = id => fetch(`http://localhost:3001/receita/${id}`).then(data=>data.text()).then(data=>{
    let recipe;
    try{
        recipe=parser(data,id)
    }catch (e) {
        if (e instanceof TypeError) {
            console.error(e)
            recipe= {_id: id, name: 'unavailable'}
        } else {
            throw e;
        }
    }
    return recipe;
})
const insertRecipe= recipe=> model.then(model=> model.create(recipe));
const update=  recipe=> {
    if (recipe.name!=='unavailable'){
        model.then(model=> model.replaceOne({ _id:recipe._id }, recipe));
    }else {
        console.log(`recipe num:${recipe._id} is really null`)
    }
}
async function fetchFailed(fails){
    for (let i=0;fails.length>i;i++){
            await fetchAndParseRecipe(fails[i]._id).then(recipe => update(recipe)).then(s => new Promise(resolve => setTimeout(resolve, 1000)) )

    }
}
const replaceNullRecipe=  async (newRecipe) => (await model).findOneAndUpdate({name:'unavailable'},newRecipe,{returnOriginal: true})
    //max unavailable = 3491
let currentRecipe= 3546;
async function unavailableReplacer(){
    for (let i=0;10>i;i++){
        const { _id, ...rest }=await fetchAndParseRecipe(currentRecipe)
        if (rest.name==='unavailable'){
            console.log("New Recipe: ",_id,' also is null!!!!!!!!!!!!!!!')
        }else {
            console.log("New Recipe: ",_id)
            const oldRecipe = await replaceNullRecipe(rest)
            console.log(`Replaced old recipe: ${oldRecipe} \n with new recipe:${JSON.stringify(rest).toString()}`)
        }
        currentRecipe++;
    }
}

module.exports= {
    loadNewRecipeIntoDb: () => model.then(model => model.count())
        .then(count => fetchAndParseRecipe(count+1))
        .then(insertRecipe),
    loadBulkRecipesIntoDb: () => model.then(model => model.count())
        .then(count => Promise.all([...Array(10).keys()].map(val =>fetchAndParseRecipe(count+val+1))))
        .then(recipes =>Promise.all(recipes.map(rec =>insertRecipe(rec)))),
    insertRecipe,
    getRecipes: async () => (await model).find({}),
    deleteUnavailables: async () => (await model).deleteMany({ name: 'unavailable' }),
    unavailableReplacer,
    replaceNullRecipe,
    recoverRecipes: async ()  => (await model).where('name','unavailable').then(failedRecipe => fetchFailed(failedRecipe)),//.then(recipe => update(recipe)),
    getSpecificQuantityRecipes: async (firstDoc,quantity) => (await model).find().lean().skip(Number(firstDoc)).limit(Number(quantity)),
    getTotalNumberOfRecipes: async () => (await model).count(),
}
