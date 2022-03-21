/* eslint-disable indent */

const dataMapper = require('../dataMapper');


const userController = {

    getSignupUser: (request, response) => {
        response.render('signup');
        
        
    },

    //Inscription d'un nouvel utilisateur
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
        const userId = Number(request.params.id);

        dataMapper.getUserByIdRequest(userId, (error, data) => {

            

          if (error){
             console.log(error);
                
          } else {

                //locals permet de faire le pont entre mon back et mon front(ejs) pour y envoyer mes données
               request.session.userInfo = data.rows[0];
               console.log('data avant update', data.rows[0]);
               response.locals.userInfo = request.session.userInfo;
               console.log('reponse locale', response.locals.userInfo);
               response.render('user');
              
        }

        }); 

    },


    updateProfilPage : (request, response) => {
        const id = parseInt(request.params.id,10);
        const userInfo= request.body;
        
        //Je verifie si les deux mots de passes modifiés correspondent
        if (userInfo.password === userInfo.repeat_password) {
            //alors j'accède à ma requete du dataMapper
            dataMapper.updateUserByUserIdRequest(userInfo, id, (error, data) => {
                if (error) {
                    console.log('Attention erreur!', error);
                    
                } else {
                    console.log('les datas sont OK', data); 
                    request.session.userInfo = data.rows[0];
                    response.redirect (`/user/${data.rows[0].id}`);
                
                }
            });
        }
    },

       
    deleteUserPage : (request, response) => {

        const id = parseInt(request.params.id,10);
        const userInfo= request.body;

        

            if (userInfo.password === userInfo.repeat_password) {

                dataMapper.deleteUserByIdRequest(id, (error, data) => {
                    if (error) {
                    console.log('Attention erreur de suppression user!', error);
    
                    } else {
                        console.log('Profil supprimé !', data );
                        response.redirect('/login');
                        
                    }
                    
                });
    
                }

       
    }    
    

    

};

 

module.exports = userController;