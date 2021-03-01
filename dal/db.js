const model= require('./modelSetup')();
const insertRecipe= recipe=> model.then(model=> model.create(recipe));

module.exports= {
    insertRecipe,
    getRecipes: async () => (await model).find({}),
    getSpecificQuantityRecipes: async (firstDoc,quantity) => (await model).find().lean().skip(Number(firstDoc)).limit(Number(quantity)),
    getTotalNumberOfRecipes: async () => (await model).count(),
}
