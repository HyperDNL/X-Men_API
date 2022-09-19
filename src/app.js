import express from 'express';
import indexRoutes from './routes/index.routes';
import exphbs from 'express-handlebars';
import path from 'path';
import { create } from "express-handlebars";
const bodyParser = require('body-parser');

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'));

app.engine(
    ".hbs",
    create({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        defaulLayout: "main",
        extname: ".hbs",
    }).engine
);
app.set("view engine", ".hbs");

app.use(indexRoutes);

app.use(express.static(path.join(__dirname, 'public')));

export default app;