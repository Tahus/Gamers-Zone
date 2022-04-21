// const dataMapper = require('../dataMapper');

// const contactController = {
//     // ici sera le controller d'envoi effectif du message

//     contactById : async(request, response) =>{
//         try {
//             // 1/ Je récupére l'ID utilisateur

//             const userId = Number(request.params.id);

//             let getUserId = await dataMapper.getUserById(userId);

//            // 2/ Je ne permet l'envoi du formulaire que si
//            //l'utilisateur est connecté

//            if (getUserId.rows[0]) {

//                console.log("J'arrive bien au contact");
//                response.render ('contact');
//            }else{
//                console.log("Connecte toi d'abord !");
//            }

//         }catch(error){
//             console.log('erreur formulaire contact', error);
//         }
//     }
// };


// //J'exporte mon controller pour le rendre accessible dans les autres fichiers.
// module.exports = contactController;