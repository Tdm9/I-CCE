const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://user:user@cluster0.lzlng.mongodb.net/companion?retryWrites=true&w=majority'
const {Schema} = mongoose;
const recipeSchema=new Schema({
    _id: {type: Number, required: true},
    recipeImage: String,
    name: String,
    ingredients: [String],
    cookingSteps: [String],
    creatorName: String,
    type: String,
    difficulty: String,
    cookTime: String,
    dosage: String,
    comments: [{commentator:String,comment:String}]
})
mongoose.connection.on('connected',()=> console.log('Mongoose is connected!'))

//module.exports = ()=> mongoose.connect(connectionString).then(mongoose=>mongoose.model('Recipes', recipeSchema));
module.exports = ()=> mongoose.connect(connectionString).then(mongoose=>mongoose.model('Iccebase', recipeSchema));
