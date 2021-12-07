
const dataMapper = require('../dataMapper');



//Le controller est un objet qui contient des methodes dans lesquels on définit
//ce qu'on veut faire (la logique) quand on arrive sur la route en question
const authController = {

    getLoginForm : (request, response) => {
        
        response.render('login');
    } ,


    loginUser : (request, response) => {

        //Je récupère les infos du login de l'user qui cherche
        // à se connecter et les stock dans une variable
        const userLogs =  request.body;

        console.log('contenus de userlogs:' , userLogs);
        // puis verifier dans la BDD si il exite bien un user
        //avec ses infos (dans la dataMapper)
        
        dataMapper.getUserByUserinfoRequest(userLogs, (error, data) => {
            if (error) {
                
                console.log('Attention !', error);
            } 
            else {
                console.log('resultat du data ', data.rows[0] );

                //les infos du user persistent une fois loggé
                //request.session correspond à mon objet associé à mon ID , stocké côté serveur
                request.session.userInfo = data.rows[0];
                console.log( 'ma request', request.session.userInfo);
                //Une fois connecté, l'user est automatiquement redirigé vers sa page de profil
                response.redirect('/');

                //Si l'utilisateur existe
                if (data.rows.length > 0) {
                    console.log('L\'utilisateur existe');
                
                    //Si il existe pas alors :
                } else{
                    console.log('Utilisateur introuvable');
                
                }
                
            }
        });

        

    }

    



    

};


module.exports = authController;