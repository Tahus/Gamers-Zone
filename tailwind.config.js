module.exports = {

    content: ["./app/views/**/*.ejs"],
    theme: {
        extend: {
            

            gridTemplateColumns:{
                //1 column 100px 1 column qui prend tout l'espace qui reste(fractional unit) et une column de 100px
                "menu": "100px 1fr 100px"
            }
        },
    },
    plugins: [],
};
