let myFavorites = [];

function postFav(req, res) {
  const character = req.body;
  myFavorites = [...myFavorites, character];
  return res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  myFavorites = myFavorites.filter((element) => element.id !== id);
  return res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav };
