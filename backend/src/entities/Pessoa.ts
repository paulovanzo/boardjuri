import { Column, PrimaryColumn } from "typeorm";

export default abstract class Pessoa {
  @PrimaryColumn()
  email: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  nascimento: Date;
}
