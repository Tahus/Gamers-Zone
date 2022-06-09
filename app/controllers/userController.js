const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');

const userController = {

    //Methode pour acceder à la page utilisateur 
    getProfilPage : async (request, response) => {
        //Je récupère les infos de mon user via son ID
        // userleId => l'ID prèsent dans mon URL
        let userId = Number(request.params.id);
        try {
            let getUserId = await dataMapper.getUserById(userId);
            if (getUserId.rows[0]){
                //locals permet de faire le pont entre mon back et mon front(ejs) pour y envoyer mes données
                // request.session.userInfo = getDataId.rows[0];
                // console.log('data avant update', getDataId.rows[0]);
                // response.locals.userInfo = request.session.userInfo;
                // console.log('reponse locale', response.locals.userInfo);
                response.render('user'); 
            } else {
                response.status(404).send(`User with id ${userInfo.id} not found`);
            }
        } catch (error) {
             console.log("Error profil By Id >", error);
        }   
    },

    updateProfil : async (request, response) => {
    
        const id = parseInt(request.params.id, 10);
        const userInfo = request.body;
    
        try 
        {
            if (userInfo.password && userInfo.repeat_password)
            {
                if (userInfo.password === userInfo.repeat_password)
                {
                    const hash = await bcrypt.hash (userInfo.password, bcrypt.genSaltSync(10));
                    userInfo.password = hash
                }             
            }
    
            // console.log("Infos de USER modifiés et hashés ! ", userInfo);
            const profilUpdate = await dataMapper.updateUser(userInfo, id);
    
            const dataSession = request.session.userInfo = profilUpdate.rows[0];
            if (dataSession) 
            {
                response.redirect (`/user/${profilUpdate.rows[0].id}`);
                console.log('les modif sont OK :', profilUpdate); 
                console.log('User modifié =>', userInfo);
                // console.log('Attention erreur!', error);
            } 
            else 
            {
                console.log("Attention erreur lors de l'update!",
                error);
            }
            
        } 
        catch (error) 
        {
            console.log('prbleme dans mon update controller', error);
        }
    },  







    deleteUser : async (request, response) => {
        
    
        try {
                        
            // 1) Récupérer le mot de passe NON HASSHE que rentre l'user depuis le front au moment de supprimer
            const { password } = request.body

            // 2) Récupérer le mot de passe HASHEE de ce user en base de donnée
            console.log("l'id de mon user, en session", request.session.userInfo.id)
            const user = await dataMapper.getUserById(request.session.userInfo.id);
            const hashedPassword = user.rows[0].password;
            console.log('contenu de password', password);
            console.log('contenu de hashedPassword', hashedPassword);
            
            // 3) Comparer ces deux valeurs grace à l'outil .compare() de bcrypt
            console.log('SANS COMPARE', password === hashedPassword);
            const pwdValid = await bcrypt.compare(password, hashedPassword);
            console.log('APRES COMPARE', pwdValid)
            
            // 4) Si la comparaison n'est pas valide, ne rien faire / ou redigriger
            if (!pwdValid) {
                return response.redirect('/deleteUser/confirm');
            };

            // 5) Si la comparaison est validé, effectuer en base de donnée une suppression de ce user
            const deleteUser = await dataMapper.deleteUserById(request.session.userInfo.id);
            console.log("delete Effectué !  =>", deleteUser);
            response.redirect('/logout');

            
        } catch(error) {
            console.log('catch delete probleme', error);
            response.redirect('/deleteUser/confirm');
        }
        
        
    }, 
    
                                  
                                                                          
};
                                                                   
                                        
module.exports = userController;