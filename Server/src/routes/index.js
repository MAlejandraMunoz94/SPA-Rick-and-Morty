const { Router } = require("express");
const mainRouter = Router();
const getCharById = require("../controllers/GetCharById");
const login = require("../controllers/Login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

mainRouter.get("/rickandmorty/character/:id", getCharById);
mainRouter.get("/rickandmorty/login", login);
mainRouter.post("/rickandmorty/fav", postFav);
mainRouter.delete("/rickandmorty/fav/:id", deleteFav);

module.exports = mainRouter;
