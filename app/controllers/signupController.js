
const dataMapper = require('../dataMapper');


const signupController = {

    getSignupUser: (request, response) => {
        response.render('signup');
        
        
    },

    addUser: (request, response) => {

        // grâce au body parser (ajouté dans le fichier index.js),
        //je vais pouvoir avoir accès à request.body, qui est un objet qui contient 
        //toutes les infos de mon formulaire envoyé via POST(quand je clique sur le bouton).
        const userInfo = request.body;
        console.log( 'infos', userInfo);
        
        //Utiliser la methode validate de Joi
                                    
        dataMapper.addUserRequest(userInfo, (error, data) => {

            if(error) {
                console.log('error addUser !', error);

            } else {


                if (data.rows[0].id) { //équivalent à if (data !== undefined)

                    //le paramètre contient bien des infos, on peut ajouter l'utilisateur en session
                    console.log('Le nouvel utilisateur a été ajouté avec succés !');

                    //et rediriger vers page du Login (requête GET sur l'url)
                    response.redirect('/Login');
                } else {
                    //pas d'erreur SQL mais on n'a récupéré aucun enregistrement, on le signale au navigateur
                    response.status(404).send(`User with id ${userInfo.id} not found`);
                }

                
                

                
                console.log('mon user', userInfo);

                
            }
        });

       
    },
    
    //Methode pour acceder à la page utilisateur 
    getProfilPage : (request, response) => {
        //Je récupère les infos de mon user via son ID
        // userleId => l'ID prèsent dans mon URL
        // const userId = Number(request.params.id);

        //dataMapper.getUserByIdRequest(userId, (error, data) => {


        //  if (error){
        //      console.log(error);
                
        //   } else {

        //        response.render('user', { userId });
              
        // }

        // }); 
        
        //locals permet de faire le pont entre mon back et mon front(ejs) pour y envoyer mes données
        response.locals.userInfo = request.session.userInfo;
    
        console.log( 'locals infos dans signupController:', response.locals.userInfo  );
        response.render( 'user' );

    },

    updateProfilPage : (request, response) => {
        console.log('body', request.body);
    }
}; 

 

module.exports = signupController;