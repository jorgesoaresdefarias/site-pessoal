

const homePage = async (req,res,next) => {
    try{

        res.render('homePage');
    }catch(e) { 
        console.log('Erro ao renderizar pagina');
    }
}

module.exports = {
    homePage
}