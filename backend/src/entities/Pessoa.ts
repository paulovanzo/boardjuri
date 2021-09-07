import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Entity,
} from "typeorm";

@Entity("Pessoa")
export default class Pessoa {
  @PrimaryGeneratedColumn()
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
