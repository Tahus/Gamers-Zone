const sanitizer = require ('sanitizer');

const bodySanitizer = (req, res, next) => {
    //for..in permet d'accéder aux clés d'un objet
    for (let propName in req.body) {
        console.log('Avant : ', req.body[propName]);
        //la méthode escape échappe les caractères HTML
        req.body[propName] = sanitizer.escape(req.body[propName]);
        console.log('Après : ', req.body[propName]);

    }
    next();
};

module.exports = bodySanitizer;