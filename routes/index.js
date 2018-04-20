module.exports = app => {
 
    app.get('/', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>RESTful API</h1><p>Projeto desenvolvido no Curso Completo de JavaScript da Hcode na Udemy.com</p>');

    });
    
};