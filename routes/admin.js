const path = require('path');

const express =  require('express');

const router = express.Router();

const products = [];

router.get('/add-product',(req, res, next) => {
    console.log('In the middleware');
    //res.send('<form action="/product" method="POST"><input type="text" name = "title"><button type = "submit">Add Product</button></form>');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product',(req, res, next) => {
    
    console.log(req.body);
    products.push({title: req.body.title})
    res.redirect('/');
    
});

exports.routes = router;
exports.products = products;