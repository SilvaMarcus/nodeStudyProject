expressApp = require('express')();

// Pedindo ao Express para usar o EJs como View Engine
expressApp.set('view engine','ejs');

expressApp.get('/:nome/:lang',(req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "P2S tecnologia",
        salario: 6000
    });
});


// abrimos a porta 8080 e pedimos para express escutar 
expressApp.listen(8080, ()=> {
    console.log("Servidor Ativo")
})