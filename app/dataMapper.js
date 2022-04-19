/* eslint-disable quotes */

const client = require('./database');

const dataMapper = {


    //Je récupère les 3 derniers articles ajoutès pour les afficher dans la page d'accueil
    getHomeArticles : async () => {
        //Je récupère que 3 enregistrements
         
        // il execute le code
        try {
            
            const queryArticlesHome = 'SELECT * FROM articles ORDER BY created_at LIMIT 3  ;';
            //await veut dire : attends que ma requete soit finie avant de passer à la suite
            const {rows} =  await client.query(queryArticlesHome);
           
            return rows ; 
            
            // en cas d'erreur le catch capture et retourne l'erreur
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        
        }

    },

      //Je récupère touts mes articles
      getAllArticles: async () => {
        try {
             //Je définit ma requete SQL
        const queryArticles = 'SELECT * FROM articles;';
        const {rows} = await client.query(queryArticles);

        return rows;
        }catch (error) {
            console.log('erreur affichage dataMapper', error);
        }
            
    },


    //Je récupère un article
    getArticleById: async (articleId) => {

        try {
             const queryOneArticle = {

                text : `SELECT * FROM articles WHERE id=$1 ;`,
                values : [articleId]
            };

            //la méthode appelée utilise client.query(pg) pour appeler la BDD
            const OneArticleId = await client.query(queryOneArticle);
            return OneArticleId;
        } catch (error) {

            console.log('error article by id >', error);
        }
        
    },

    //Je récupère la liste des catégories
    getCategoriesPage : async() => {

        try {
            const queryCategories = `SELECT * FROM categories;`;
            const {rows} = await client.query(queryCategories);

            return rows ;
        } catch (error) {
            console.log('erreur Categories dataMapper >', error);
        }

    },

    //Je récupère une categorie, ma méthode attend en paramètre : un ID et une fonction callback
    getArticlesByCategory : async (categoryId) =>{

        try {
            const queryCategoryArticles  = {

            text : `SELECT * FROM articles WHERE categories_id = $1;`,
            values : [categoryId]
        };
            const {rows} = await client.query(queryCategoryArticles);
            return rows;
        } catch (error) {

            console.log('erreur articles category dataMapper >', error);
        }
        
    },


    
    // Je récupère seulement le titre de ma categorie
    getCategoryTitle: async (categoryId) => {

        try {
            const queryCategoryTitle = {
            
            text : `SELECT name FROM categories WHERE id= $1;`,
            values : [categoryId]
            
        };

        const titleCategory= await client.query(queryCategoryTitle);
        return titleCategory;
        } catch (error) {
            console.log('erreur dataMapper title category>', error);
        }
        
    },

    //J'ajoute un nouvel utilisateur via mon formulaire d'inscription
    addUser : async (userInfo) => {

        try {
            const queryAddUser = { 
                //Dans la requête, j'utilise RETURNING pour récupérer le nouvel id généré par postgres à l'insertion du nouvel utilisateur
                text : (`INSERT INTO users ("user_name", "email", "birth_date", "password")
                        VALUES ( $1, $2, $3, $4) RETURNING id;`),
                values : [userInfo.name, userInfo.email, userInfo.birth_date, userInfo.password]
            };
    
            const saveUser = await client.query(queryAddUser);
            // console.log('2.5 saveUserDataMapper > ', saveUserDataMapper)
            return saveUser;
        } catch(error) {
            console.log('errorSaveUser (DM) > ', error)
        }


    },
   

    //J'accède au profil de l'utilisateur inscrit ou connecté

    getUserById: async (userId) => {
        try {
            const queryOneUser = {

                text : `SELECT * FROM users WHERE id=$1;`,
                values : [userId]

            };

            const user = await client.query(queryOneUser);
            // console.log("user", user)

            return user;

        } catch (error) {

            console.log( 'error user by ID >', error);
        }


    },

  
    //Je récupère les données de l'user qui veut se logger
    getUserByLogs : async (userLogs) => {
        try {
            const queryUserByInfosLogs = {
                text :`SELECT * FROM users WHERE email =$1;`,
                //En requête préparée, SQL s'attends à avoir un tableau dans lesquel rechercher dans l'ordre les données qui correspondent à $1,$2, etc..
                values : [userLogs.email]
            };
            const findUser = await client.query(queryUserByInfosLogs);
            // console.log('2.5 findUserDataMapper > ', findUserDataMapper)
            return findUser;
        } catch(error) {
            
             console.log('error Logs (DM)> ', error);
        }

    },
    
    //Je mets à jours touts les champs du formulaire(body)
    updateUser : async (userInfo, id) => {

        try {
            const queryUserById = {

                text : `UPDATE users SET user_name = $1, email = $2, password = $3, birth_date = $4 WHERE id = $5 RETURNING *;`,
     
             //Attention, il faut récuperer les valeurs qui se trouvent dans "name" côté input EJS pour userInfo
             values : [userInfo.name, userInfo.email, userInfo.password, userInfo.birth_date, id]
        };
            const updateById = await client.query(queryUserById)
            // console.log('2.5 UpdateUserDataMapper > ', updateByDataMapper)
            return updateById;

        } catch (error) {

            console.log('Erreur update DataMapper > ', error);
        }
         
    },

    deleteUserById : async (userId)=> {

        try {
            const queryDeleteById = {
                text : `DELETE FROM "users" WHERE id=$1;`,
    
                values : [userId]
            };

            const deleteProfil= await client.query(queryDeleteById);
            return deleteProfil;
        } catch (error){
            console.log('erreur delet dataMapper >', error);
        }
       

       
    }

};

 
module.exports = dataMapper; 

