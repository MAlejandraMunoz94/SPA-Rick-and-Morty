const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it("Responde un objeto con las propiedades: id,name,species,gender,status,origin e image", async () => {
      const response = (await agent.get("/rickandmorty/character/1")).body;
      const atributos = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];
      const propiedades = Object.keys(response);

      atributos.forEach((atributo) => expect(propiedades).toContain(atributo));
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/900").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Devuelve un objeto con la propiedad access: true", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login?email=aleejamjr@gmail.com&password=1234567"
      );

      expect(body.access).toEqual(true);
    });
    it("Devuelve un objeto con la propiedad access: false", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login?email=aleejamjr@gmail.com&password=1239097"
      );

      expect(body.access).toEqual(false);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const prueba1 = { id: 901, name: "maggie" };
    const prueba2 = { id: 902, name: "molly" };
    it("Retorna un array que contiene el personaje", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(prueba1);
      expect(body).toContainEqual(prueba1);
    });
    it("Al enviar mas de un elemento, retorna un array que contiene a ambos personajes", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(prueba2);
      expect(body).toContainEqual(prueba1);
      expect(body).toContainEqual(prueba2);
    });
  });
});

describe("DELETE /rickandmorty/fav/:id", () => {
  const prueba1 = { id: 901, name: "maggie" };
  const prueba2 = { id: 902, name: "molly" };
  it("No se envia un ID correcto devuelve el mismo array", async () => {
    const { body } = await agent.delete("/rickandmorty/fav/123456");
    expect(body).toContainEqual(prueba1);
    expect(body).toContainEqual(prueba2);
  });
  it("Si se envia un ID correcto devuelve el array actualizado", async () => {
    const { body } = await agent.delete("/rickandmorty/fav/901");
    expect(body).not.toContainEqual(prueba1);
  });
});
