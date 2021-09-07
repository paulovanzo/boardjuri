import Usuario from "../entities/Usuario";

export interface IUsuario {
  listAll(): Promise<Usuario[]>;

  findOne(email: string): Promise<Usuario>;

  save(parameter: Usuario): Promise<Usuario>;
}
