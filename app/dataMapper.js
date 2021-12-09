
const client = require('./database');

const dataMapper = {

    //Je récupère les 3 derniers articles ajoutès pour les afficher dans la page d'accueil
    getHomesArticlesRequest : async () => {
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
    getArticlesPageRequest: (callback) => {
        //Je définit ma requete SQL
        const queryArticles = 'SELECT * FROM articles;';
        client.query(queryArticles, callback);     
    },


    //Je récupère un article
    getArticleByIdRequest: (articleId, callback) => {

        const queryOneArticle = {

            text : `SELECT * FROM articles WHERE id=$1 ;`,
            values : [articleId]
        };

        //la méthode appelée utilise client.query(pg) pour appeler la BDD
        client.query(queryOneArticle, callback);
    },

    //Je récupère la liste des catégories
    getCategoriesPageRequest : (callback) => {

        const queryCategories = 'SELECT * FROM categories;';

        client.query(queryCategories,callback);
    },

    //Je récupère une categorie, ma méthode attend en paramètre : un ID et une fonction callback
    getArticlesByCategoryIdRequest : (categoryId, callback) =>{
        const queryCategoryArticles  = {

            text : `SELECT * FROM articles WHERE categories_id = $1;`,
            values : [categoryId]
        };
        
        client.query(queryCategoryArticles, callback);
    },


    
    // Je récupère seulement le titre de ma categorie
    getOneCategoryTitleRequest: (categoryId, callback) => {
        const queryCategoryTitle = {
            
            text : `SELECT name FROM categories WHERE id= $1;`,
            values : [categoryId]
        };

        client.query(queryCategoryTitle, callback);
    },

    //J'ajoute un nouvel utilisateur via mon formulaire d'inscription
    addUserRequest : (userInfo, callback  ) => {
        console.log('dataMapper', userInfo);
        
        const queryAddUser = { 

            text : (`INSERT INTO users ("user_name", "email", "birth_date", "url_picture", "password")
                    VALUES ( $1, $2, $3, $4, $5) RETURNING id;`),
            
            values : [userInfo.name, userInfo.email, userInfo.birth_date, userInfo.image, userInfo.password]

        };

        client.query(queryAddUser, callback);

    },

    //J'accède au profil de l'utilisateur inscrit ou connecté
    getUserByIdRequest: (userId, callback) => {

        const queryOneUser = {

            text : `SELECT * FROM users WHERE id=$1;`,
            values : [userId],

        };
        
        client.query(queryOneUser, callback);
    },
    
    //Je récupère les données de l'user qui veut se logger
    getUserByUserinfoRequest : (userLogs, callback) => {

        const queryUserByInfosLogs = {

            text :`SELECT * FROM users WHERE email =$1 AND password =$2;`,

            //En requête préparée, SQL s'attends à avoir un tableau dans lesquel rechercher dans l'ordre les données qui correspondent à $1,$2, etc..
            values : [userLogs.email, userLogs.password]

        };
        
        
        client.query(queryUserByInfosLogs, callback);
    },

    
   //Je mets à jours touts les champs du formulaire(body)
   updateUserByUserIdRequest : (userInfo, id, callback) => {
        
    const queryUserById = {

        text : `UPDATE users SET user_name = $1, email = $2, password = $3, birth_date = $4, url_picture = $5 WHERE  id = $6 RETURNING *;`,

        //Attention, il faut récuperer les valeurs qui se trouvent dans "name" côté input EJS pour userInfo
        values : [userInfo.name, userInfo.email, userInfo.password, userInfo.birth_date, userInfo.avatar, id]
    };
    client.query(queryUserById, callback);
}
};

 
module.exports = dataMapper; 

