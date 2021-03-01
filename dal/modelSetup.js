const mongoose = require('mongoose');
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

module.exports = ()=> mongoose.connect(process.env.connectionString).then(mongoose=>mongoose.model('Iccebase', recipeSchema));
