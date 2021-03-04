const mainPath=require('../../vue.config').publicPath;

module.exports = {
    homePath: `${mainPath}`,
    favPath: `${mainPath}/favourites`,
    popularPath: `${mainPath}/popular`,
    searchPath: `${mainPath}/search`,
    typePath: `${mainPath}/typeSearch/`,
    typePathWithParam: `${mainPath}/typeSearch/:type`,
    detailsPath: `${mainPath}/details`,
};
