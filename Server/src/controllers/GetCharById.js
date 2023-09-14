const axios = require("axios");
const api = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;

  let response = await axios.get(api + id);

  try {
    let { data } = response;

    const character = {
      id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };

    if (character.name) {
      res.status(200).json(character);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = getCharById;
