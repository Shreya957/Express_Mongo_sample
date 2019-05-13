const path = require('path');

const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));// statically adding files--CSS

app.use(adminRoutes.routes);
app.use(shopRoutes);


app.use((req,res,next) => {

    //res.status(404).send('<h1>page not found</h1>
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);



// app.use creates a middleware
//usage number 1 ONE
//app.use((req, res, next) => {
//    console.log('In the middleware');
//    next();// goes to next middleware in line
//});
//app.use((req, res, next) => {
//    console.log('In the second middleware');
//    res.send('<h1>Hello from Express</h1>');
//});

//app.use usage number TWO

/*  added below code in routes admin and shop

app.use('/add-product',(req, res, next) => {
    console.log('In the middleware');
    res.send('<form action="/product" method="POST"><input type="text" name = "title"><button type = "submit">Add Product</button></form>');
    
});

app.post('/product',(req, res, next) => {
    
    console.log(req.body);
    res.redirect('/');
    
}); 
//app.post is used when we want to just use a middleware for post request 
// we can also use app.get app.put etc

app.use('/',(req, res, next) => {
    console.log('In the second middleware');
    res.send('<h1>Hello from Express</h1>');
});*/


//while using express we can reduce the code lines by using app.listen(port) instead of below lines
//const server = http.createServer(app);
//server.listen(3000);
//app.listen(3000); commented for clean code.. line added above

// you can filter routes with similar path 
// for ex if all /admin/product and /admin/productdetails
// to admin is the common segment in both the paths use the below code fragment
//app.use('/admin', OBJECT CONSTAING THE ROUTES)
//in above case app.use('/admin', adminRoutes);

