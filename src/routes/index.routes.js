import { response, Router } from 'express';
const router = Router();
import axios from 'axios';

router.get('/', async (req, res) => {
    await axios
        .get("https://xmenapiheroku.herokuapp.com/api/characters?page=1", {
            responseType: "json",
        })
        .then(function (response) {
            const chars = response.data.results;
            res.render('index', { chars: chars });
        });
});

router.get('/page2', async (req, res) => {
    await axios
        .get("https://xmenapiheroku.herokuapp.com/api/characters?page=2", {
            responseType: "json",
        })
        .then(function (response) {
            const chars = response.data.results;
            res.render('page2', { chars: chars });
        });
});

router.get('/search', async (req, res) => {
    const s = req.query.name;
    const firstURL = "https://xmenapiheroku.herokuapp.com/api/characters/?name=";
    const fullURL = firstURL + s;
    await axios
        .get(fullURL, {
            responseType: "json",
        })
        .then(function (response) {
            const chars = response.data.results;
            res.render('searchResults', { chars: chars });
        });
});

export default router;