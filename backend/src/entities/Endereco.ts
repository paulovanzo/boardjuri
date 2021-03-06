import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import Usuario from "./Usuario";

@Entity("Endereco")
export default class Endereco {
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
    primary: true,
  })
  @JoinColumn({ name: "email" })
  usuario: Usuario;
}
