
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

        const queryOneArticle = `SELECT * FROM articles WHERE id=${articleId}`;
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
        const queryCategoryArticles  = `SELECT * FROM articles WHERE categories_id = ${categoryId}`;
        client.query(queryCategoryArticles, callback);
    },

    // Je récupère seulement le titre de ma categorie
    getOneCategoryTitleRequest: (categoryId, callback) => {
        const queryCategoryTitle = `SELECT name FROM categories WHERE id=${categoryId}`;
        client.query(queryCategoryTitle, callback);
    },

    //J'ajoute un nouvel utilisateur via mon formulaire d'inscription
    addUserRequest : (userInfo, callback  ) => {
        console.log('dataMapper', userInfo);
        
        const queryAddUser = (`INSERT INTO users ("user_name", "email", "birth_date", "url_picture", "password")
                               VALUES ( 
                                   '${userInfo.name}', 
                                   '${userInfo.email}', 
                                   '${userInfo.birth_date}', 
                                   '${userInfo.avatar}', 
                                   '${userInfo.password}') RETURNING id`);
        
                                   
        console.log('ma query :'  , queryAddUser);
        

        

        client.query(queryAddUser, callback);

    },

    //J'accède au profil de l'utilisateur inscrit ou connecté
    getUserByIdRequest: (userId, callback) => {

        const queryOneUser = `SELECT * FROM users WHERE id=${userId}`;
        
        client.query(queryOneUser, callback);
    },
    
    //Je récupère les données de l'user qui veut se logger
    getUserByUserinfoRequest : (userLogs, callback) => {

        const queryUserByInfosLogs = `SELECT * FROM users WHERE email =$1 AND password =$2`;
        
        //En requête préparée, SQL s'attends à avoir un tableau dans lesquel rechercher dans l'ordre les données qui correspondent à $1,$2, etc..
        client.query(queryUserByInfosLogs, [userLogs.email, userLogs.password], callback);
    },


};

 
module.exports = dataMapper; 

