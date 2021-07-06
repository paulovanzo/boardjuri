import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  email: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  nascimento: string;
}
