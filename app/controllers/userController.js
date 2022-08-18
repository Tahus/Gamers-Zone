const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');


//Methode pour acceder à la page utilisateur
const userController = {

     
    getProfilPage : async (request, response) => {

        //Je récupère les infos de mon user via son ID
        // userleId => l'ID prèsent dans mon URL
        let userId = Number(request.params.id);

        try {
            let getUserId = await dataMapper.getUserById(userId);

            //Si j'accède à l'id de l'user alors la view est rendue
            if (getUserId.rows[0]){
                //locals permet de faire le pont entre mon back et mon front(ejs) pour y envoyer mes données
                response.render('user'); 
            } else {
                response.status(404).send(`L'user avec l'ID ${userInfo.id} non trouvé`);
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
            // Si l'user modifie le password et la confirmation du password
            if (userInfo.password && userInfo.repeat_password)
            {
                //Je vérifie que les deux champs ont la même modification
                if (userInfo.password === userInfo.repeat_password)
                {
                    //Puis je hash le password
                    const hash = await bcrypt.hash (userInfo.password, bcrypt.genSaltSync(10));
                    userInfo.password = hash
                }             
            }
            
            // Puis je fait appel à la méthode du dataMapper
            const profilUpdate = await dataMapper.updateUser(userInfo, id);
            
            // Je mets à jours ma session avec les nouvelles modifications
            const dataSession = request.session.userInfo = profilUpdate.rows[0];

            //Si la modification à bien été prise en compte
            if (dataSession) 
            {
                response.redirect (`/user/${profilUpdate.rows[0].id}`);

                console.log('les modif sont OK :', profilUpdate);

                console.log('User modifié =>', userInfo);
               
            } 
            else 
            {
                console.log("Attention erreur lors de l'update!", error);
            }
            
        } 
        catch (error) 
        {
            console.log('probleme dans mon update controller', error);
        }
    },  







    deleteUser : async (request, response) => {
        
    
        try {
                        
            // 1) Récupérer le mot de passe NON HASSHE que rentre l'user depuis le front au moment de supprimer
            const { password } = request.body

            
            console.log("l'id de mon user, en session", request.session.userInfo.id)

            const user = await dataMapper.getUserById(request.session.userInfo.id);
            
            // 2) Récupérer le mot de passe HASHEE de ce user en base de donnée
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