const dataMapper = require("../dataMapper");

const bcrypt = require("bcrypt");

const schema = require("../schemas/schema");

//Le controller est un objet qui contient des methodes dans lesquels on définit
//ce qu'on veut faire (la logique) quand on arrive sur la route en question
const authController = {

  //Inscription d'un nouvel utilisateur
  signUp: async (request, response) => {
    // grâce au body parser (ajouté dans le fichier index.js),
    //je vais pouvoir avoir accès à request.body, qui est un objet qui contient
    //toutes les infos de mon formulaire envoyé via POST(quand je clique sur le bouton).

    //Je stock dans une variable les infos de mon formulaire d'inscription
    const userInfo = request.body;

    try {
      // Je traite une éventuelle erreur dûe à un non respect du schéma de Joi Validate
      const { error } = schema.validate(request.body);

      if (error) {
        console.log(request.body);
        console.log("Attention problème Joi");
        return response.status(400).json(error.message);
      }

      //Je hashe le password
      const hash = await bcrypt.hash(userInfo.password, bcrypt.genSaltSync(10));
      userInfo.password = hash;
      userInfo.repeat_password = hash;

      //Je fait appelle à ma requête et mon params en question
      const data = await dataMapper.addUser(userInfo);

      //équivalent à if (data !== undefined)
      if (data.rows[0].id) {
        //le paramètre contient bien des infos, on peut ajouter l'utilisateur en session
        //et rediriger vers page du Login (requête GET sur l'url)
        response.redirect("/login");
        console.log("INSCRIPTION NOUVEAU USER OK !");
      } else {
        //pas d'erreur SQL mais on n'a récupéré aucun enregistrement, on le signale au navigateur
        response.status(404).send(`User avec l'ID ${userInfo.id} pas trouvé`);
      }
    } catch (error) {
      console.error("problème inscription : ", error);
    }
  },

  // SIGN IN (connexion d'un user)
  signIn: async (request, response) => {

    //Je récupère les infos du login de l'user qui cherche
    // à se connecter et les stock dans une variable
    const userLogins = request.body;
    console.log("Contenu de userlogins:", userLogins);

    // Je verifie dans la BDD si il ya bien un user avec ses infos
    try {
      const foundUser = await dataMapper.getUserByLogs(userLogins);
      console.log("contenu foundUser >", foundUser);
      console.log("contenu Logins >", userLogins);

      //Si l'user n'est pas trouvé
      if (!foundUser) {
        // on ecrit le mot clef return, donc si l'user est introuvable, on return, la fonction s'arrête et redirige vers la page d'accueil 
        //sinon, on passe à la suite
        console.log("Utilisateur introuvable");
        return response.redirect("/login");
      }

      //  Si l'user est trouvé, on compare le mdp rentré par l'user avec celui stocké en BDD
      const validPwd = await bcrypt.compare(
        userLogins.password,
        foundUser.rows[0].password
      );

      //Si le password n'est pas bon
      if (!validPwd) {
        console.log("probleme login", validPwd);
        return response.redirect("/login");
      }

      // si j'arrive là, c'est qu'on est passé par aucun des return, tout roule
      //Si le mot de passe est correct, j'enregistre les infos de l'utilisateur
      //dans la session
      const userWithoutPassword = {
        id: foundUser.rows[0].id,
        user_name: foundUser.rows[0].user_name,
        email: foundUser.rows[0].email,
        birth_date: foundUser.rows[0].birth_date,
      };
      //Ici je stock l'objet contenant les infos de l'utilisateur (ci-dessus) dans sa session en faisant attention à ne pas enregistrer son mot passe
      //(celui-ci se trouvera dans la méthode prévue pour)
      request.session.userInfo = userWithoutPassword;

      //puis on redirige l'utilisateur vers sa page d'accueil
      response.redirect("/");
    } catch (error) {
        
      console.log("probleme pour se connecter:", error);
      response.redirect("/login");
    }
  },

  logOut: (request, response) => {
    delete request.session.userInfo;
    response.redirect("/");
  },
};

module.exports = authController;
