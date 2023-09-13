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
      return res.status(200).json(character);
    } else {
      throw new Error("Character not found");
    }
  } catch (error) {
    if (error.message === "Character not found") {
      return res.status(404).send(error.message);
    } else {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = getCharById;
