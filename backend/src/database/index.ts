import { createConnection } from "typeorm";

export const ConectarBD = async () => {
  const conexao = await createConnection();

  process.on("SIGINT", () => {
    conexao.close().then(() => {
      console.log("Conexão encerrada");
    });
  });
};
