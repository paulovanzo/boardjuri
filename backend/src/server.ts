import app from "./app";
import { ConectarBD } from "./database/index";

ConectarBD();
app.listen(3333, () =>
  console.log(`⚡️[server]: Server is running at https://localhost:3333`)
);
