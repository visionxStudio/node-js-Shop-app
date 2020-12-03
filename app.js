const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const pageNotFoundHandler = require('./controllers/404Error');
const app = express();

app.set('view engine', 'ejs'); // sets the method of rendering to the ejs 
app.set('views', 'views'); // here we are specifying the views folder

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false })); // use extended : false
app.use(express.static(path.join(__dirname, 'public'))); // Serving static files in Express

app.use('/admin', adminRoutes.routes); // admin routes 
app.use(shopRoutes); // shop routes


// if no routes are found then render the 404 page not found page 
app.use(pageNotFoundHandler.get404);

app.listen(3000); // listening to the port 3000 -- Production environment change these
