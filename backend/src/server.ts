import app from "./app";
import { ConectarBD } from "./database/index";

ConectarBD();

const porta = 3333;

const server = app.listen(porta, () =>
  console.log(`⚡️[server]: Server is running at https://localhost:${porta}`)
);

process.on("SIGINT", () => {
  server.close();
});
