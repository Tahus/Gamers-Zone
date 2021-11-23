
const dataMapper = require('../dataMapper');



//Le controller est un objet qui contient des methodes dans lesquels on définit
//ce qu'on veut faire (la logique) quand on arrive sur la route en question
const authController = {

    getLoginForm : (request, response) => {
        
        response.render('login');
    } ,


    loginUser : (request, response) => {

        //Je récupère les infos du login de l'user qui cherche
        // à se connecter
        const userLogs =  request.body;

        console.log('my user logs:' , userLogs);
        // puis verifier dans la BDD si il exite bien un user
        //avec ses infos (dans la dataMapper)
        
        dataMapper.getUserByUserinfoRequest(userLogs, (error, data) => {
            if (error) {
                
                console.log('Attention !', error);
            } else {
                console.log('resultat du data ', data.rows[0] );

                //les infos du user persistent 
                request.session.userInfo = data.rows[0];
                response.redirect(`/user/${data.rows[0].ids}`);
                
            }
        });
        
        



    }
    



    

};


module.exports = authController;