const jsdom = require("jsdom");
const imgFilter = ['https://receitas.moulinex.pt/companion/images/logo.png','https://receitas.moulinex.pt/companion/images/default-user-image.jpg','https://receitas.moulinex.pt/companion/uploads/images/2015/10/20/56264ff08de78_3.jpg']

const domParser= (html,currentId)=>{
    const doc=new jsdom.JSDOM(html).window.document
    const recipeDetails = Array.from(doc.querySelector('.recipeDetails.col-xs-12').querySelectorAll('li'), listItem => listItem.textContent);
    return {
        _id: currentId,
       // recipeImage: Array.from(doc.querySelectorAll("img"), img => img.src).filter(img=>!imgFilter.includes(img))[0],
        recipeImage: Array.from(doc.querySelectorAll(".img-fix")[0].querySelectorAll("img"), img => img.src).filter(img=>!imgFilter.includes(img))[0],
        name: doc.querySelector('.titles.titles.col-sm-9').querySelector('h2').textContent,
        type: doc.querySelector('.titles.titles.col-sm-9').querySelector('h4').textContent,
        ingredients: Array.from(doc.querySelector('div.ingredients-list').querySelectorAll('p'), ing => ing.textContent),
        cookingSteps: Array.from(doc.querySelector('.recipe-instructions.col-sm-12').querySelectorAll('li'),instruction => instruction.textContent),
        creatorName: doc.querySelector('div.recipe-owner-info').querySelector('h4').textContent,
        difficulty: recipeDetails[1],
        cookTime: recipeDetails[2],
        dosage: recipeDetails[3],
        comments: Array.from(doc.querySelector('.col-sm-12.shadow.comments-section').querySelectorAll('.comment.col-sm-12'),comment=>({commentator:comment.querySelector('h4').textContent,comment:comment.querySelector('div.comment-text').textContent}))
    }
}


/*
* img-header-crop img-fix ---- imagem tumbnail
* img-crop img-fix
*
*
*
*
*
* */
module.exports= domParser
