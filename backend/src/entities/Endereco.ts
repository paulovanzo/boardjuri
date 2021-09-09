import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import Usuario from "./Usuario";

@Entity("Endereco")
export default class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  numero: number;

  @Column()
  cep: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.enderecos, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "email_usuario_endereco" })
  usuario: Usuario;
}
