const dataMapper = require('../dataMapper');

const bcrypt = require('bcrypt'); 

const schema = require('../schemas/schema')


//Le controller est un objet qui contient des methodes dans lesquels on définit
//ce qu'on veut faire (la logique) quand on arrive sur la route en question
const authController = {

    // SIGN UP
    //Inscription d'un nouvel utilisateur
    signUp: async (request, response) => {

    // grâce au body parser (ajouté dans le fichier index.js),
    //je vais pouvoir avoir accès à request.body, qui est un objet qui contient 
    //toutes les infos de mon formulaire envoyé via POST(quand je clique sur le bouton).
    const userInfo = request.body;

        try {

            const {error} = schema.validate(request.body);
            if (error) {
                console.log(request.body);
                console.log('attention probleme Joi');
                return response.status(400).json(error.message);
            }
            
            const hash = await bcrypt.hash(userInfo.password, bcrypt.genSaltSync(10));
            userInfo.password = hash;
            userInfo.repeat_password= hash;

            
            const data = await dataMapper.addUser(userInfo);
            //équivalent à if (data !== undefined)
            if (data.rows[0].id) {
                //le paramètre contient bien des infos, on peut ajouter l'utilisateur en session
                console.log("Le nouvel utilisateur a été ajouté avec succés !");
                //et rediriger vers page du Login (requête GET sur l'url)
                
                response.redirect('/login');
               console.log('INSCRIPTION NOUVEAU USER OK !'); 

            } else {
                //pas d'erreur SQL mais on n'a récupéré aucun enregistrement, on le signale au navigateur
                response.status(404).send(`User with id ${userInfo.id} not found`);
            }
        } catch (error) {
          console.error('problème inscription : ', error);
        }
    },


    // SIGN IN (connexion d'un user)
    signIn : async (request, response) => {

        //Je récupère les infos du login de l'user qui cherche
        // à se connecter et les stock dans une variable
        const userLogins =  request.body;
        console.log('contenus de userlogins:' , userLogins);

        // puis verifier dans la BDD si il exite bien un user
        //avec ses infos
        try {
            const foundUser = await dataMapper.getUserByLogs(userLogins);
            console.log('contenu foundUser >', foundUser);
            console.log('contenu userLogs >', userLogins);

            if(!foundUser){
                // on ecrit le mot clef return, donc si l'user est introuvable, on return, la fonction s'arrête, sinon, on passe à la suite
                console.log('Utilisateur introuvable');
                return response.redirect('/login');
            }
            //  Si l'user est trouvé, on check le mdp
            const validPwd = await bcrypt.compare(userLogins.password, foundUser.rows[0].password)
            if(!validPwd){
                console.log('probleme login', validPwd);
                return response.redirect('/login');
                
            }
            // si on arrive là, c'est qu'on est passé par aucun des return, tout roule boule
            //Si le mot de passe est correct, on enregistre les infos de l'utilisateur
            //dans la session

            const userWithoutPassword = {
                id: foundUser.rows[0].id,
                user_name: foundUser.rows[0].user_name,
                email: foundUser.rows[0].email,
                birth_date: foundUser.rows[0].birth_date,
            }
            //Ici on stock l'objet contenant les infos de l'utilisateur (ci-dessus) dans sa session en faisant attention de pas enregistrer son mot passe 
            //(celui-ci se trouvera dans la méthode prévue pour) 
            request.session.userInfo = userWithoutPassword;

            //puis on redirige l'utilisateur vers la page d'accueil
            response.redirect('/');
        } catch(error) {
             console.log('probleme pour se connecter:', error);
            // console.log('4 datamapper problem')
            response.redirect('/login');
        }
    },

    logOut: (request, response) => {
        delete request.session.userInfo
        response.redirect('/');
    }


};


module.exports = authController;