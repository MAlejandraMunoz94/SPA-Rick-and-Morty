const server = require("./src/app");
const {conn} = require("./src/DB_connection")

const PORT = 3001;
server.listen(PORT, () => {
  console.log("Server activo en puerto: " + PORT);
});
